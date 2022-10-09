import styled from "styled-components";

const S = {
  Wrapper: styled.table`
    width: 100%;
    display: grid;
    grid-template-columns: 72px repeat(6, 1fr);

    th {
      border-bottom: 1px solid #000000;
    }
    td {
      border-bottom: 1px solid #000000;
    }
  `,
  CheckCell: styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000000;
  `
}

export default S;