import styled from 'styled-components';

const S = {
  Wrapper: styled.th<{ sortable: boolean }>`
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: ${(props) => props.sortable && "pointer"}
  `,
  TableData: styled.span`
    margin-right: 10px;
    font-weight: bold;
  `
} 

export default S;
