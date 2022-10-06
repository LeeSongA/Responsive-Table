import { ReactElement } from "react";

import SortIcon from "public/images/sort-icon.svg";

import S from './style';

type ColumnCellProps = {
  children: ReactElement | string;
  sortable?: boolean;
};

const ColumnCell = (props: ColumnCellProps) => {
  const { children, sortable = false, ...rest} = props;

  return (
    <S.Wrapper onClick={() => sortable && console.log("sort")} sortable={sortable}>
      <S.TableData>{children}</S.TableData>
      {sortable && <SortIcon >sort</SortIcon>}
    </S.Wrapper>
  );
};

export default ColumnCell;
