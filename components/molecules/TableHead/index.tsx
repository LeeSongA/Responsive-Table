import ColumnCell from "components/atoms/ColumnCell";

import S from "./style";

type ColumnItem = {
  key: string;
  title: string;
  dataIndex: string;
  sortable: boolean;
}

type TableHeadProps = {
  columnList: Array<ColumnItem>;
};

const TableHead = ({ columnList }: TableHeadProps) => {
  return (
    <>
      {columnList.map((columnItem, i) => <ColumnCell key={columnItem.key} sortable={columnItem.sortable}>{columnItem.title}</ColumnCell>)}
    </>
  )
};

export default TableHead;