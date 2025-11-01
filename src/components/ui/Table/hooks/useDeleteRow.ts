import { Dispatch, SetStateAction } from "react";
import { TableRow } from "~/types/tableProps";

const DeleteRow = (setData?: Dispatch<SetStateAction<TableRow[]>>) => {
  const handleDelete = (index: number) => {
    setData?.((prev) => prev.filter((_, i) => i !== index));
  };

  return { handleDelete };
}

export default DeleteRow;