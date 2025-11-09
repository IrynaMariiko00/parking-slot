import { useState } from 'react';
import { TableRow } from '~/types/TableProps';

const addData = ({
  setMainTableData,
}: {
  openModal: (value: boolean) => void;
  setMainTableData: React.Dispatch<React.SetStateAction<TableRow[]>>;
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string | number }>(
    {}
  );

  const handleSubmit = () => {
    // fix types
    setMainTableData((prev) => [...prev, formData]);
  };

  return { handleSubmit, setFormData };
};

export default addData;
