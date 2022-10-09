export type ColumnItem = {
  key: string;
  title: string;
  dataIndex: string;
  sortable: boolean;
}

export type RowItem = {
  id: string;
  name: string;
  phone: string;
}

export type SortOption = {
  dataIndex: string | null;
  isAscending: boolean;
}