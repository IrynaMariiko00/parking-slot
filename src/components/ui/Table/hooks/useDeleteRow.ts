import { Dispatch, SetStateAction } from 'react';

const DeleteRow = <T extends Record<string, unknown>>(setData?: Dispatch<SetStateAction<T[]>>) => {
  const handleDelete = (index: number) => {
    setData?.((prev) => prev.filter((_, i) => i !== index));
  };

  return { handleDelete };
};

export default DeleteRow;
