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
      {columnList.map((columnItem, i) => <S.Bold key={columnItem.key}>{columnItem.title}</S.Bold>)}
    </>
  )
};

export default TableHead;