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
  // TODO: row 클릭 시 선택이 되거나, 페이지 이동 등 이벤트 실행
  const onClickRow = (rowIndex: number) => {
    console.log(`click row ${rowIndex}`);
  }

  return (
    <S.Wrapper>
      <TableHead columnList={columnList} />
      {rowList.map((rowItem, i) => <TableRow key={i} rowList={rowItem} onClick={() => onClickRow(i)} />)}
    </S.Wrapper>
  );
};

export default GridTable;