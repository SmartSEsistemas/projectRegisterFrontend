import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEye,
} from 'react-icons/ai';
import {
  FilterInput,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
  ItemsPerPageContainer,
  ItemsPerPageText,
  ActionButton,
  ActionIconsWrapper,
  TableHeaderActions,
  TableBodyActions,
  TableRowHeader,
} from './style';
import Pagination from '../Pagination';
import { Button } from '../Buttons/Button';
import { ICONS } from '@/utils/Icons';
import { ContainerInner } from '@/styles/global';
import Link from 'next/link';

interface DataTable {
  data: any[];
  columns: string[];
}

const DataTable = ({ data, columns }: DataTable) => {
  const [isOpenFilter, setIsOpenFilter] = useState(true);
  const [filteredData, setFilteredData] = useState(data);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [heightTable, setHeightTable] = useState(0);

  useMemo(() => {
    setHeightTable(5 * 55);
  }, []);

  // Filtro de dados
  const handleFilterChange = (
    column: string,
    value: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const valueString = value.currentTarget.value as string;
    const filterData = data.filter((item) =>
      item[column].toString().toLowerCase().includes(valueString.toLowerCase()),
    );
    setFilteredData(filterData);
    setCurrentPage(1);
  };

  // Ordenação de colunas
  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Paginação
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Atualiza os dados filtrados quando o filtro ou a ordenação mudam
  // useEffect(() => {
  //   const sortedData = [...filteredData];

  //   if (sortColumn !== '') {
  //     sortedData.sort((a, b) => {
  //       const valA = a[sortColumn];
  //       const valB = b[sortColumn];

  //       if (valA < valB) {
  //         return sortDirection === 'asc' ? -1 : 1;
  //       }
  //       if (valA > valB) {
  //         return sortDirection === 'asc' ? 1 : -1;
  //       }
  //       return 0;
  //     });
  //   }

  //   setFilteredData(sortedData);
  // }, [filteredData, sortColumn, sortDirection]);

  // Calcula o índice inicial e final dos itens exibidos na página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calcula o número total de páginas
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // funçoes de operaçao
  const handleView = (item: any) => {
    // Lógica para visualizar o registro
    console.log('Visualizar', item);
  };

  const handleEdit = (item: any) => {
    // Lógica para editar o registro
    console.log('Editar', item);
  };

  const handleDelete = (item: any) => {
    // Lógica para remover o registro
    console.log('Remover', item);
  };

  const handleItemsPerPage = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
    // const length = currentItems.length;
    // console.log(length);

    // switch (length) {
    //   case 5:
    //     setHeightTable(41 * length);
    //     break;
    //   case 10:
    //     setHeightTable(42 * length);
    //     break;
    //   case 20:
    //     setHeightTable(41 * length);
    //     break;
    //   case 50:
    //     setHeightTable(40 * length);
    //     break;
    //   default:
    //     setHeightTable(225);
    //     break;
    // }
  };

  return (
    <ContainerInner>
      <ItemsPerPageContainer>
        <ItemsPerPageText>Itens por pagina:</ItemsPerPageText>
        <select
          value={itemsPerPage}
          onChange={(e) => handleItemsPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </ItemsPerPageContainer>
      <TableContainer height={`${100 + heightTable}px`}>
        <Table>
          <thead>
            <TableRowHeader>
              {columns.map((column) => (
                <TableHeader key={column}>
                  <button
                    type="button"
                    onClick={() => handleSort(column)}
                    aria-label={`Sort by ${column}`}
                  >
                    <span>{column}</span>
                    {sortColumn === column && sortDirection === 'asc' ? (
                      <AiOutlineSortAscending />
                    ) : (
                      <AiOutlineSortDescending />
                    )}
                  </button>
                </TableHeader>
              ))}
              <TableHeaderActions>
                <p>Actions</p>
              </TableHeaderActions>
            </TableRowHeader>
            <TableRowHeader>
              {columns.map((column) => (
                <TableHeader key={column}>
                  <FilterInput
                    type="text"
                    placeholder="Search"
                    onChange={(e) => handleFilterChange(column, e)}
                  />
                </TableHeader>
              ))}
              <TableHeaderActions></TableHeaderActions>
            </TableRowHeader>
          </thead>

          <tbody>
            {currentItems.map((item, i) => (
              <TableRow key={item.id + i}>
                {columns.map((column, j) => (
                  <TableCell key={column + j}>{item[column]}</TableCell>
                ))}

                <TableBodyActions>
                  <ActionIconsWrapper>
                    <ActionButton onClick={() => handleView(item)}>
                      <AiOutlineEye />
                    </ActionButton>
                    <ActionButton onClick={() => handleEdit(item)}>
                      <AiOutlineEdit />
                    </ActionButton>
                    <ActionButton onClick={() => handleDelete(item)}>
                      <AiOutlineDelete />
                    </ActionButton>
                  </ActionIconsWrapper>
                </TableBodyActions>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </ContainerInner>
  );
};

DataTable.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DataTable;
