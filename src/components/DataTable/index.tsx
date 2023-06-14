import React, { useState, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
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
  WrapperInput,
  HeaderTableComponent,
  ClearFilter,
} from './style';
import Pagination from '../Pagination';
import { Button } from '../Buttons/Button';
import { ContainerInner } from '@/styles/global';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface DataTable {
  data: any[];
  columns: { name: string; realName: string; width: string }[];
}

const DataTable = ({ data, columns }: DataTable) => {
  const router = useRouter();
  const currentRoute = router.asPath;

  const [filteredData, setFilteredData] = useState(data);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [filterActive, setFilterActive] = useState(false);
  const wrapperInputs = useRef<any>(null);
  // Filtro de dados
  const handleFilterChange = (
    column: string,
    value: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const listFilter = wrapperInputs.current?.querySelectorAll(
      'input',
    ) as HTMLInputElement[];

    let listValue: { value: string; position: number }[] = [];
    listFilter.forEach(({ value }, index) => {
      if (value) listValue.push({ value, position: index });
    });

    const keysObjectData = Object.keys(data[0]);
    const filterData: any[] = [];
    data.forEach((item) => {
      const isValid = listValue.every(({ value, position }) =>
        item[keysObjectData[position]]
          .toString()
          .toLowerCase()
          .includes(value.toLocaleLowerCase()),
      );

      if (isValid) filterData.push(item);
    });

    setFilterActive(true);
    setFilteredData(filterData);
    setCurrentPage(1);
  };

  // Ordenação de colunas
  const handleSort = (column: string) => {
    setFilterActive(true);
    if (column === sortColumn)
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleClearFilters = () => {
    if (!filterActive) return;
    setSortColumn('');
    setSortDirection('desc');
    setFilterActive(false);
    setFilteredData(data);

    const listInput = wrapperInputs.current?.querySelectorAll(
      'input',
    ) as HTMLInputElement[];
    listInput.forEach((input) => {
      input.value = '';
    });
  };

  // Paginação
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Atualiza os dados filtrados quando o filtro ou a ordenação mudam
  useEffect(() => {
    const sortedData = [...data];

    if (sortColumn !== '') {
      sortedData.sort((a, b) => {
        const valA = a[sortColumn];
        const valB = b[sortColumn];

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;

        return 0;
      });
    }

    setFilteredData(sortedData);
  }, [data, sortColumn, sortDirection]);

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
  };

  return (
    <ContainerInner>
      <HeaderTableComponent>
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
        <Link href={`${currentRoute}/cadastro`}>
          <Button>
            <span>+</span> Cadastrar
          </Button>
        </Link>
      </HeaderTableComponent>
      <TableContainer numberItems={currentItems.length}>
        <Table>
          <thead>
            <TableRowHeader>
              {columns.map(({ width, name, realName }) => (
                <TableHeader
                  width={width}
                  active={sortColumn === realName && sortDirection === 'asc'}
                  key={name}
                >
                  <button
                    type="button"
                    onClick={() => handleSort(realName)}
                    aria-label={`Sort by ${name}`}
                  >
                    {name}
                    {sortColumn === realName && sortDirection === 'asc' ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                  </button>
                </TableHeader>
              ))}
              <TableHeaderActions>
                <p>Ações</p>
              </TableHeaderActions>
            </TableRowHeader>
            <TableRowHeader ref={wrapperInputs}>
              {columns.map(({ width, name, realName }) => (
                <TableHeader
                  width={width}
                  active={sortColumn === name}
                  key={name}
                >
                  <WrapperInput>
                    <FilterInput
                      type="text"
                      placeholder={'Buscar'}
                      onChange={(e) => handleFilterChange(name, e)}
                    />
                  </WrapperInput>
                </TableHeader>
              ))}
              <TableHeaderActions>
                <ClearFilter active={filterActive}>
                  <Button onClick={handleClearFilters} type="button">
                    Limpar filtros
                  </Button>
                </ClearFilter>
              </TableHeaderActions>
            </TableRowHeader>
          </thead>

          <tbody>
            {currentItems ? (
              currentItems.map((item, i) => (
                <TableRow key={i}>
                  {columns.map(({ realName }, j) => (
                    <TableCell key={realName + j}>{item[realName]}</TableCell>
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
              ))
            ) : (
              <TableRow></TableRow>
            )}
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
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;
