import styled from 'styled-components';

const S = {
  Wrapper: styled.th<{ sortable: boolean }>`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 12px;
    // cursor
  `,
  TableData: styled.span`
    margin-right: 10px;
    font-weight: bold;
  `
} 

export default S;