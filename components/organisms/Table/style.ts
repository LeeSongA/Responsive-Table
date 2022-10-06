import styled from 'styled-components';

const S = {
  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
  `,
  TableHead: styled.tr`
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #000000;
    display: grid;
    grid-template-columns: 200px 1fr 25% 200px 1fr 30%;
  `,
  TableRow: styled.tr`
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #000000;   
    display: grid;
    grid-template-columns: 200px 1fr 25% 200px 1fr 30%;

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