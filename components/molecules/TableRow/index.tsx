import RowCell from "components/atoms/RowCell";

import { RowItem } from "types/table";

type TableRowProps = {
  rowList: RowItem;
  onClick?: () => void;
};

const TableRow = (props: TableRowProps) => {
  const { rowList, onClick } = props;


  return (
    <>
      {Object.values(rowList).map((tableCell, i) => <RowCell key={i} onClick={onClick}>{tableCell}</RowCell>)}
    </>
  )
};

export default TableRow;