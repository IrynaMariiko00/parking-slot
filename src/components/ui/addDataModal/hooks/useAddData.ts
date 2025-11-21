import { useState } from 'react';

// merge with useDeleteRow
const addData = <T extends Record<string, unknown>>({
  setMainTableData,
}: {
  onClose: (value: boolean) => void;
  setMainTableData: React.Dispatch<React.SetStateAction<T[]>>;
}) => {
  const [formData, setFormData] = useState<T>({} as T);

  const handleSubmit = () => {
    setMainTableData((prev) => [...prev, formData]);
  };

  return { handleSubmit, setFormData };
};

export default addData;
