import { Dispatch, SetStateAction } from "react";

import ColumnCell from "components/atoms/ColumnCell";

type SortOption = {
  dataIndex: string | null;
  isAscending: boolean;
}

type ColumnItem = {
  key: string;
  title: string;
  dataIndex: string;
  sortable: boolean;
}

type TableHeadProps = {
  columnList: Array<ColumnItem>;
  setSortOption?: Dispatch<SetStateAction<SortOption>>;
};

const TableHead = (props: TableHeadProps) => {
  const { columnList, setSortOption } = props;

  return (
    <>
      {columnList.map((columnItem, i) => <ColumnCell key={i} dataIndex={columnItem.dataIndex} sortable={columnItem.sortable} setSortOption={setSortOption}>{columnItem.title}</ColumnCell>)}
    </>
  )
};

export default TableHead;