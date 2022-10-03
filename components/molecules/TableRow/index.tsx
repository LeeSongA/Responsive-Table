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
      {Object.values(rowItem).map((cell, i) => <TableCell key={`row-${i}`}>{cell}</TableCell>)}
    </>
  )
};

export default TableRow;