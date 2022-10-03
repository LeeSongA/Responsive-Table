import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 80%; // TODO: cell 하나 너비 min, max 주기 : minmax()
    min-width: 375px;
    max-width: 1920px;
    border-right: 1px solid #000000;
    border-bottom: 1px solid #000000;
  `
} 

export default S;