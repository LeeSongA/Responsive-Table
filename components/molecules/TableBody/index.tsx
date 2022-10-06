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

type TableBodyProps = {
  columnList: Array<ColumnItem>;
  rowList: Array<RowItem>;
};

const TableBody = (props: TableBodyProps) => {
  const { columnList, rowList } = props;
  
  const onClickRow = (rowIndex: number) => {
    console.log(`click row ${rowIndex}`);
  }

  return (
    <>
      {rowList.map((rowItem, i) => (
        <S.TableRow key={columnList[i].dataIndex} onClick={() => onClickRow(i)}>
          {Object.values(rowItem).map((tableCell, i) => <RowCell key={`row-${i}`}>{tableCell}</RowCell>)}
        </S.TableRow>
      ))}
    </>
  )
};

export default TableBody;