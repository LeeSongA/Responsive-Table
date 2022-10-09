import { Dispatch, SetStateAction } from "react";

import ColumnCell from "components/atoms/ColumnCell";

import { ColumnItem, SortOption } from "types/table";

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