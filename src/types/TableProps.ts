export type TableHeaders = {
  id: string;
  label: string;
};

export type TableRowType = Record<string, unknown>;

export type TableProps<T extends TableRowType> = {
  headers: TableHeaders[];
  data?: T[];
  setData?: React.Dispatch<React.SetStateAction<T[]>>;
};

export type addDataPopupType<T extends TableRowType> = {
  onClose: () => void;
  setMainTableData: React.Dispatch<React.SetStateAction<T[]>>;
};

export interface TableRowProps<T extends TableRowType> {
  indexRow: number;
  row: T;
  onRowClick: (row: T) => void;
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
