import styled from "styled-components";

const S = {
  Wrapper: styled.table`
    width: 100%;
    display: grid;
    grid-template-columns: 200px 1fr 400px 1fr 1fr 150px;
    grid-template-rows: repeat(20, 40px);

    th {
      background-color: #E8E8ED;
    }
    td {
      border-bottom: 1px solid #E8E8ED;
    }
  `
}

export default S;