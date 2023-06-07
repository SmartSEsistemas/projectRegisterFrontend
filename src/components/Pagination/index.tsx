import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from 'react-icons/ai';
import { PaginationContainer, PaginationButton, PaginationInfo } from './style';

interface IPagination {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: IPagination) => {
  return (
    <PaginationContainer>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(1)}
      >
        <AiOutlineDoubleLeft />
      </PaginationButton>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <AiOutlineLeft />
      </PaginationButton>
      <PaginationInfo>
        Página {currentPage} de {totalPages}
      </PaginationInfo>
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <AiOutlineRight />
      </PaginationButton>
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(totalPages)}
      >
        <AiOutlineDoubleRight />
      </PaginationButton>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
