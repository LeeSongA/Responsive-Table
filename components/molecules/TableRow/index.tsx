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
  onClick: () => void;
};

const TableRow = (props: TableRowProps) => {
  const { rowList } = props;


  return (
    <>
      {Object.values(rowList).map((tableCell, i) => <RowCell key={`row-${i}`}>{tableCell}</RowCell>)}
    </>
  )
};

export default TableRow;