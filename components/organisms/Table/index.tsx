import TableBody from 'components/molecules/TableBody';
import TableHead from 'components/molecules/TableHead';

import S from './style';

type TableProps = {
  
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
  { id: "1", email: "test@hutom.io", name: "lee", department: "department", phone: "phone", data: "data" }, 
  { id: "1", email: "test@hutom.io", name: "lee", department: "department", phone: "phone", data: "data" }, 
  { id: "1", email: "test@hutom.io", name: "lee", department: "department", phone: "phone", data: "data" }
];

const Table = ({}: TableProps) => {
  return (
    <S.Table>
      <TableHead columnList={columnList} />
      <TableBody columnList={columnList} rowList={rowList} />
    </S.Table>
  );
};

export default Table;


{/* <S.ColumnCell>ID</S.ColumnCell>
<S.ColumnCell>E-mail</S.ColumnCell>
<S.ColumnCell>Name</S.ColumnCell>
<S.ColumnCell>Department</S.ColumnCell>
<S.ColumnCell>Phone No.</S.ColumnCell>
<S.ColumnCell>Request Data</S.ColumnCell>

<S.RowCell>384459</S.RowCell>
<S.RowCell>mamo@hutom.io</S.RowCell>
<S.RowCell>Lee</S.RowCell>
<S.RowCell>GS</S.RowCell>
<S.RowCell>010-0000-0000</S.RowCell>
<S.RowCell>2022.02.20</S.RowCell>

<S.RowCell>389459</S.RowCell>
<S.RowCell>mamo@hutom.io</S.RowCell>
<S.RowCell>Lee</S.RowCell>
<S.RowCell>GS</S.RowCell>
<S.RowCell>010-0000-0000</S.RowCell>
<S.RowCell>2022.02.20</S.RowCell>

<S.RowCell>984459</S.RowCell>
<S.RowCell>mamo@hutom.io</S.RowCell>
<S.RowCell>Lee</S.RowCell>
<S.RowCell>GS</S.RowCell>
<S.RowCell>010-0000-0000</S.RowCell>
<S.RowCell>2022.02.20</S.RowCell>

<S.RowCell>584459</S.RowCell>
<S.RowCell>mamo@hutom.io</S.RowCell>
<S.RowCell>Lee</S.RowCell>
<S.RowCell>GS</S.RowCell>
<S.RowCell>010-0000-0000</S.RowCell>
<S.RowCell>2022.02.20</S.RowCell> */}