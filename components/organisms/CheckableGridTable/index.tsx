import { useEffect, useState } from "react";

import Checkbox from "components/atoms/Checkbox";
import TableRow from "components/molecules/TableRow";
import TableHead from "components/molecules/TableHead";

import { ColumnItem, RowItem, SortOption } from "types/table";

import S from "./style";

type CheckableGridTableProps = {
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

const CheckableGridTable = ({}: CheckableGridTableProps) => {
  const [sortOption, setSortOption] = useState<SortOption>({ dataIndex: null, isAscending: false });
  const [checkedIndex, setCheckedIndex] = useState(new Set());
  const rowIndex = new Set(rowList.map((rowItem, i) => i));

  // TODO: 백엔드 정렬 데이터 요청
  const handleSort = () => {
    console.log(sortOption);
  }

  // NOTE: 하나의 리스트 선택 이벤트
  const handleCheckRowItem = (rowIndex: number) => {
    setCheckedIndex((prevState: any) => {
      const newCheckedIndex = new Set(prevState);
      prevState.has(rowIndex) ? newCheckedIndex.delete(rowIndex) : newCheckedIndex.add(rowIndex);

      return newCheckedIndex;
    });
  }

  // NOTE: 전체 선택 또는 전체 해제
  const handleCheckRowList = () => {
    checkedIndex.size === rowList.length ? setCheckedIndex(new Set()) : setCheckedIndex(rowIndex); 
  }

  // NOTE: sortOption 값이 달라지면 정렬 데이터 요청하는 함수 호출
  useEffect(() => {
    handleSort();
  }, [sortOption])

  return (
    <S.Wrapper>
      <S.CheckCell><Checkbox checked={checkedIndex.size === rowList.length} onChange={handleCheckRowList}/></S.CheckCell>
      <TableHead columnList={columnList} setSortOption={setSortOption} />

      {rowList.map((rowItem, i) => (
        <>
          <S.CheckCell><Checkbox checked={checkedIndex.has(i)} onChange={() => handleCheckRowItem(i)} /></S.CheckCell>
          <TableRow key={i} rowList={rowItem} onClick={() => handleCheckRowItem(i)} />
        </>
      ))}
    </S.Wrapper>
  );
};

export default CheckableGridTable;