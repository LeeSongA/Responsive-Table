import styled from 'styled-components';

const S = {
  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  `,
  TableHead: styled.tr`
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #000000;
  `,
  TableRow: styled.tr`
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #000000;

    &:last-child {
      border-bottom: none;
    }
  `,
  ColumnCell: styled.th`
    white-space: nowrap;
    font-weight: bold;
    text-align: left;
  `,
  RowCell: styled.td`
    white-space: nowrap;
  `
} 

export default S;