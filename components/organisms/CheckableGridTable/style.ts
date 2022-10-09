import styled from "styled-components";

const S = {
  Wrapper: styled.table`
    width: 100%;
    display: grid;
    grid-template-columns: 72px repeat(6, 1fr);
    grid-template-rows: repeat(20, 40px);

    th {
      background-color: #E8E8ED;
    }
    td {
      border-bottom: 1px solid #E8E8ED;
    }
  `,
  CheckCell: styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #E8E8ED;

    &:first-child {
      border-bottom: none;
      background-color: #E8E8ED;
    }
  `
}

export default S;