export type TableHeaders = {
  id: string;
  label: string;
};

export type TableProps = {
  headers: TableHeaders[];
  data?: Record<string, unknown>[];
  setData?: React.Dispatch<React.SetStateAction<TableRow[]>>;
};

export type TableRow = Record<string, string | number>;

export type addDataPopupType = {
  openPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setMainTableData: React.Dispatch<React.SetStateAction<TableRow[]>>;
};

export interface TableRowProps {
  indexRow: number,
  row: Record<string, unknown>,
  onRowClick: (row: Record<string, unknown>) => void,
  headers: TableHeaders[],
  onDelete: (index: number) => void,
}