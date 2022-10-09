import { ReactElement, Dispatch, SetStateAction } from "react";

import SortIcon from "public/images/sort-icon.svg";

import { SortOption } from "types/table";
import S from './style';

// NOTE: useState 상태 변경 함수 타입 Dispatch<SetStateAction<StateType>>
type ColumnCellProps = {
  children: ReactElement | string;
  dataIndex: string;
  sortable?: boolean;
  setSortOption?: Dispatch<SetStateAction<SortOption>>;
};

const ColumnCell = (props: ColumnCellProps) => {
  const { children, dataIndex, sortable = false, setSortOption, ...rest} = props;

  // NOTE: 동일한 열 클릭 시 정렬 토글, 다른 열 클릭 시 오름차순
  const handleSort = () => {
    setSortOption && 
      setSortOption((sortOption: SortOption) => ({
        dataIndex,
        isAscending: sortOption.dataIndex === dataIndex ? !sortOption.isAscending : true
      }));
  }

  return (
    <S.Wrapper onClick={() => sortable && handleSort()} sortable={sortable}>
      <S.TableData>{children}</S.TableData>
      {sortable && <SortIcon >sort</SortIcon>}
    </S.Wrapper>
  );
};

export default ColumnCell;
