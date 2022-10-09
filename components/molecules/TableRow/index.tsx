import RowCell from "components/atoms/RowCell";

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

type TableRowProps = {
  rowList: RowItem;
  rowIndex: number;
};

const TableRow = (props: TableRowProps) => {
  const { rowList, rowIndex } = props;
  
  const onClickRow = (rowIndex: number) => {
    console.log(`click row ${rowIndex}`);
  }

  return (
    <>
      {Object.values(rowList).map((tableCell, i) => <RowCell key={`${rowIndex}-${i}`} onClick={() => onClickRow(rowIndex)}>{tableCell}</RowCell>)}
    </>
  )
};

export default TableRow;