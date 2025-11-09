import { Dispatch, SetStateAction } from 'react';
import type { TableRow } from '~/types/TableProps';

const DeleteRow = (setData?: Dispatch<SetStateAction<TableRow[]>>) => {
  const handleDelete = (index: number) => {
    setData?.((prev) => prev.filter((_, i) => i !== index));
  };

  return { handleDelete };
};

export default DeleteRow;
