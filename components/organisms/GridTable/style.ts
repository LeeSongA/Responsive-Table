import styled from "styled-components";

const S = {
  Wrapper: styled.table`
    width: 100%;
    display: grid;
    grid-template-columns: 200px 1fr 400px 1fr 1fr 150px;

    th {
      border-bottom: 1px solid #000000;
    }
    td {
      border-bottom: 1px solid #000000;
    }
  `
}

export default S;