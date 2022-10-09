import { ReactElement } from "react";

import S from './style';

type RowCellProps = {
  children: ReactElement | string;
};

const RowCell = (props: RowCellProps) => {
  const {children, ...rest} = props;

  return (
    <S.Wrapper {...rest}>
      {children}
    </S.Wrapper>
  );
};

export default RowCell;
