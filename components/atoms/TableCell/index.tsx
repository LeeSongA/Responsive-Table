import { ReactElement } from "react";
import S from "./style";

type TableCellProps = {
  key: string;
  children: ReactElement | string;
};

const TableCell = ({ key, children, ...rest }: TableCellProps) => {
  return (
    <S.Wrapper key={key}>
      {children}
    </S.Wrapper>
  );
};

export default TableCell;