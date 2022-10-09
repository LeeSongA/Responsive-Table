import TableRow from "components/molecules/TableRow";
import TableHead from "components/molecules/TableHead";

import S from "./style";

type ColumnItem = {
  key: string;
  title: string;
  dataIndex: string;
  sortable: boolean;
}

type RowItem = {
  id: string;
  name: string;
  phone: string;
}

type GridTableProps = {
  columnList: Array<ColumnItem>;
  rowList: Array<RowItem>;
};

const columnList = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "phone", title: "Phone", dataIndex: "phone", sortable: true },
];

const rowList = [
  { id: "1", name: "lee", phone: "phone" }, 
  { id: "2", name: "kim1111111111111111111", phone: "phone" }, 
  { id: "3", name: "him", phone: "phone" },
];

const GridTable = ({}: GridTableProps) => {
  return (
    <S.Wrapper>
      <TableHead columnList={columnList} />
      {rowList.map((rowItem, rowIndex) => <TableRow key={rowIndex} rowList={rowItem} rowIndex={rowIndex} />)}
    </S.Wrapper>
  );
};

export default GridTable;