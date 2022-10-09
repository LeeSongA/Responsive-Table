import { ReactElement } from "react";

import S from './style';

type RowCellProps = {
  children: ReactElement | string;
  onClick: () => void;
};

const RowCell = (props: RowCellProps) => {
  const {children, onClick, ...rest} = props;

  return (
    <S.Wrapper onClick={onClick} {...rest}>
      {children}
    </S.Wrapper>
  );
};

export default RowCell;
