import styled from "styled-components";

export const Mark = styled.span`
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border: 1px solid #000000;
  border-radius: 3px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 0;
  height: 0;
  margin: 0;
  opacity: 0;

  &:checked ~ ${Mark} {
    border-color: #000000;
    background-color: #000000;
    transition: all 150ms;

    polyline {
      stroke: #ffffff;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
`;

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 24px;
  cursor: pointer;
`;

