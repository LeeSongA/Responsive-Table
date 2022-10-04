import TableCell from "components/atoms/TableCell";

type RowItem = {
  id: string;
  name: string;
  phone: string;
}

type TableRowProps = {
  rowItem: RowItem;
};

const TableRow = ({rowItem}: TableRowProps) => {
  return (
    <>
      {Object.values(rowItem).map((tableCell, i) => <TableCell key={`row-${i}`}>{tableCell}</TableCell>)}
    </>
  )
};

export default TableRow;