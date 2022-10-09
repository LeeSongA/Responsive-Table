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
  { key: "email", title: "E-mail", dataIndex: "email", sortable: false},
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "department", title: "Department", dataIndex: "department", sortable: false},
  { key: "phone", title: "Phone", dataIndex: "phone", sortable: true },
  { key: "data", title: "Data", dataIndex: "data", sortable: true }
];

const rowList = [
  { id: "1", email: "test@hutom.io", name: "lee", department: "department", phone: "phone", data: "data" }, 
  { id: "1", email: "test@hutom.io", name: "lee", department: "department111111111111111", phone: "phone", data: "data" }, 
  { id: "1", email: "test@hutom.io", name: "lee", department: "department", phone: "phone1111111111", data: "data" }, 
  { id: "1", email: "test@hutom.io", name: "lee11111111111111", department: "department", phone: "phone", data: "data" }
];

const GridTable = ({}: GridTableProps) => {
  // TODO: row 클릭 시 페이지 이동 등 이벤트 실행
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