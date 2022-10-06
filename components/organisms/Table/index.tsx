import S from './style';

type TableProps = {
  
};

const Table = ({}: TableProps) => {
  return (
    <S.Table>
      <S.TableHead>
        <S.ColumnCell>ID</S.ColumnCell>
        <S.ColumnCell>E-mail</S.ColumnCell>
        <S.ColumnCell>Name</S.ColumnCell>
        <S.ColumnCell>Department</S.ColumnCell>
        <S.ColumnCell>Phone No.</S.ColumnCell>
        <S.ColumnCell>Request Data</S.ColumnCell>
      </S.TableHead>

      <S.TableRow>
        <S.RowCell>384459</S.RowCell>
        <S.RowCell>mamo@hutom.io</S.RowCell>
        <S.RowCell>Lee</S.RowCell>
        <S.RowCell>GS</S.RowCell>
        <S.RowCell>010-0000-0000</S.RowCell>
        <S.RowCell>2022.02.20</S.RowCell>
      </S.TableRow>
      <S.TableRow>
        <S.RowCell>389459</S.RowCell>
        <S.RowCell>mamo@hutom.io</S.RowCell>
        <S.RowCell>Lee</S.RowCell>
        <S.RowCell>GS</S.RowCell>
        <S.RowCell>010-0000-0000</S.RowCell>
        <S.RowCell>2022.02.20</S.RowCell>
      </S.TableRow>
      <S.TableRow>
        <S.RowCell>984459</S.RowCell>
        <S.RowCell>mamo@hutom.io</S.RowCell>
        <S.RowCell>Lee</S.RowCell>
        <S.RowCell>GS</S.RowCell>
        <S.RowCell>010-0000-0000</S.RowCell>
        <S.RowCell>2022.02.20</S.RowCell>
      </S.TableRow>
      <S.TableRow>
        <S.RowCell>584459</S.RowCell>
        <S.RowCell>mamo@hutom.io</S.RowCell>
        <S.RowCell>Lee</S.RowCell>
        <S.RowCell>GS</S.RowCell>
        <S.RowCell>010-0000-0000</S.RowCell>
        <S.RowCell>2022.02.20</S.RowCell>
      </S.TableRow>
      <S.TableRow>
        <S.RowCell>184459</S.RowCell>
        <S.RowCell>mamo@hutom.io</S.RowCell>
        <S.RowCell>Lee</S.RowCell>
        <S.RowCell>GS</S.RowCell>
        <S.RowCell>010-0000-0000</S.RowCell>
        <S.RowCell>2022.02.20</S.RowCell>
      </S.TableRow>
    </S.Table>
  );
};

export default Table;