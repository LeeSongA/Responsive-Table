import { useEffect, useState } from "react";

import TableRow from "components/molecules/TableRow";
import TableHead from "components/molecules/TableHead";

import { ColumnItem, RowItem, SortOption } from "types/table";
import S from "./style";

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
  const [sortOption, setSortOption] = useState<SortOption>({ dataIndex: null, isAscending: false });

  // TODO: 백엔드 정렬 데이터 요청
  const handleSort = () => {
    console.log(sortOption);
  }

  // TODO: row 클릭 시 페이지 이동 등 이벤트 실행
  const handleClickRow = (rowIndex: number) => {
    console.log(`click row ${rowIndex}`);
  }

  // NOTE: sortOption 값이 달라지면 정렬 데이터 요청하는 함수 호출
  useEffect(() => {
    handleSort();
  }, [sortOption])

  return (
    <S.Wrapper>
      <TableHead columnList={columnList} setSortOption={setSortOption} />
      {rowList.map((rowItem, i) => <TableRow key={i} rowList={rowItem} onClick={() => handleClickRow(i)} />)}
    </S.Wrapper>
  );
};

export default GridTable;