export type TableHeaders = {
  id: string;
  label: string;
};

export type TableProps = {
  headers: TableHeaders[];
  data?: Record<string, unknown>[];
  setData?: React.Dispatch<React.SetStateAction<TableRow[]>>;
};

export type TableRow = {
  id: number;
  brand: string;
  year: number | string;
  color: CarColors;
};

export type addDataPopupType = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMainTableData: React.Dispatch<React.SetStateAction<TableRow[]>>;
};

export interface TableRowProps {
  indexRow: number;
  row: TableRow;
  onRowClick: (row: TableRow) => void;
  headers: TableHeaders[];
  onDelete: (index: number) => void;
}

export enum CarColors {
  Red = 'red',
  Blue = 'blue',
  Yellow = 'yellow',
  Green = 'green',
  Orange = 'orange',
  Purple = 'purple',
  Pink = 'pink',
  Brown = 'brown',
  Cyan = 'cyan',
  Magenta = 'magenta',
}
