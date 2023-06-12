import styled from 'styled-components';

export const TableContainer = styled.div<{ numberItems: number }>`
  overflow-x: auto;
  width: 100%;
  height: ${(props) => {
    const items = props.numberItems;
    let height = 0;
    switch (items) {
      case 5:
        height = items * 52;
        break;
      case 10:
        height = items * 50;
        break;
      case 20:
        height = items * 50.5;
        break;
      case 50:
        height = items * 47;
        break;
      default:
        height = items * 50;
        break;
    }
    return `${125 + height}px`;
  }};
  position: relative;
  border-radius: 5px;
  color: ${({ theme }) =>
    theme.theme === 'dark' ? theme.lightGray : theme.dark};
  table-layout: auto;
  text-align: left;

  & p,
  & span {
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: capitalize;
  }

  & button {
    color: ${({ theme }) =>
      theme.theme === 'dark' ? theme.lightGray : theme.dark};
  }
`;

export const Table = styled.table`
  width: initial;
  border-collapse: collapse;
  position: absolute;
  width: 100%;
`;

export const TableHeader = styled.th<{ width: string; active: boolean }>`
  padding: 8px 0px 8px 8px;
  min-width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.3s;

  & button {
    display: flex;
    align-items: center;
    padding: 8px;
    text-align: left;
    width: 100%;
    height: 100%;
    font-weight: bold;
    background-color: ${({ theme }) =>
      theme.theme === 'dark' ? '#2A3042' : theme.light};
    border: 1px solid transparent;
    border-left: 1px solid ${({ theme }) => theme.borderColor};
    font-size: 0.875rem;
    text-transform: capitalize;
    transition: all 0.3s;

    // Melhorar essa parte
    color: ${({ theme, active }) =>
      theme.theme === 'dark'
        ? active
          ? theme.primary
          : '#A6B0CF'
        : active
        ? theme.primary
        : 'rgba(0,0,0,0.5)'};

    border-left: 1px solid
      ${({ theme, active }) =>
        theme.theme === 'dark'
          ? active
            ? theme.primary
            : theme.borderColor
          : active
          ? theme.primary
          : theme.borderColor};
    cursor: pointer;

    & svg {
      margin-left: 8px;
    }

    &:hover {
      color: ${({ theme }) => theme.primary};
      border-left: 1px solid ${({ theme }) => theme.primary};
    }
  }
`;

export const TableHeaderActions = styled.th`
  padding: 0px 8px;
  min-width: 10%;
  max-width: 10%;
  position: sticky;
  right: 0px;
  background-color: ${({ theme }) =>
    theme.theme === 'dark' ? '#2A3042' : theme.light};
  z-index: 1;
  white-space: nowrap;
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  & p {
    padding: 8px;
    width: 100%;
    height: 100%;
    color: ${({ theme }) =>
      theme.theme === 'dark' ? '#A6B0CF' : 'rgba(0,0,0,0.5)'};
    border-left: 1px solid ${({ theme }) => theme.borderColor};
  }

  & div {
    border-left: 1px solid ${({ theme }) => theme.borderColor};
  }
`;

export const TableBodyActions = styled.td`
  min-width: 150px;
  position: sticky;
  right: 0px;
  z-index: 1;
  padding: 8px;
  background-color: inherit;
  width: auto;
  white-space: nowrap;
`;

export const ActionIconsWrapper = styled.div`
  display: flex;
  padding-left: 8px;
  transition: opacity 0.5s ease;
  border-left: 1px solid ${({ theme }) => theme.borderColor};
  opacity: 0;
`;

export const TableRowHeader = styled.tr`
  background-color: ${({ theme }) =>
    theme.theme === 'dark' ? '#2A3042' : theme.light};
  width: auto;
  white-space: nowrap;
`;

export const TableRow = styled.tr`
  background-color: ${({ theme }) =>
    theme.theme === 'dark' ? '#2A3042' : theme.light};
  width: auto;
  white-space: nowrap;
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  &:hover {
    border-top: 1px solid ${({ theme }) => theme.primary};
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    position: relative;
    z-index: 10;

    box-shadow: 0px 0px 4px
      ${({ theme }) =>
        theme.theme === 'dark'
          ? ' rgba(206, 212, 218, 0.2)'
          : ' rgba(29, 202, 150, 0.1)'};

    & div {
      border-left: 1px solid ${({ theme }) => theme.primary};
      opacity: 1;
    }
  }
`;

export const TableCell = styled.td`
  padding: 16px;
  white-space: nowrap;
  font-size: 0.875rem;
`;

export const WrapperInput = styled.div`
  border-left: 1px solid ${({ theme }) => theme.borderColor};
  padding-left: 8px;
`;

export const FilterInput = styled.input`
  padding: 8px;
  border-radius: 3px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.borderColor};
  width: 100%;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => (theme.theme === 'dark' ? '#F6F6F6' : '#000000')};

  &::placeholder {
    color: ${({ theme }) => theme.borderColor};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  &:not(:placeholder-shown) {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  &:before {
    display: inline-block;
    content: '';
    height: 10px;
    width: 1px;
    background: red;
  }
`;

export const ActionButton = styled.button`
  border: 1px solid ${({ theme }) => theme.borderColor};
  height: 32px;
  width: 32px;
  background: none;
  cursor: pointer;
  margin-right: 5px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  &:hover {
    background: ${({ theme }) => theme.background} !important;
    border: 1px solid ${({ theme }) => theme.primary} !important;

    & svg {
      color: ${({ theme }) => theme.primary};
    }
  }

  svg {
    font-size: 1rem;
  }
`;

export const HeaderTableComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;

  & button {
    display: flex;
    align-items: center;

    & span {
      margin-right: 8px;
      font-size: 1rem;
    }
  }
`;

export const ClearFilter = styled.div<{ active: boolean }>`
  & button {
    color: ${({ theme, active }) =>
      theme.theme === 'dark'
        ? active
          ? theme.primary
          : '#A6B0CF'
        : active
        ? theme.primary
        : 'rgba(0,0,0,0.5)'};
    border: 1px solid
      ${({ theme, active }) =>
        theme.theme === 'dark'
          ? active
            ? theme.primary
            : theme.borderColor
          : active
          ? theme.primary
          : theme.borderColor};
    background-color: ${({ theme }) =>
      theme.theme === 'dark' ? '#2A3042' : theme.light};
    font-size: 0.875rem;
    font-weight: 400;
    width: 107px;
    display: flex;
    justify-content: center;
    margin-left: 8px;
    transition: all 0.3s;
    cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  }
`;

export const ItemsPerPageContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => (theme.theme === 'dark' ? '#A6B0CF' : theme.dark)};
  & select {
    padding: 4px 8px;
    border-radius: 5px;
  }
`;

export const ItemsPerPageText = styled.span`
  margin-right: 5px;
`;
