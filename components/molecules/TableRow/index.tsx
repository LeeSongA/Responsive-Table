import RowCell from "components/atoms/RowCell";

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
  const { rowList, onClick } = props;


  return (
    <>
      {Object.values(rowList).map((tableCell, i) => <RowCell key={`row-${i}`} onClick={onClick}>{tableCell}</RowCell>)}
    </>
  )
};

export default TableRow;