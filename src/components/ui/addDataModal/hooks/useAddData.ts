import { useState } from "react";
import { TableRow } from "~/types/tableProps";

const addData = ({openModal, setMainTableData}: {
    openModal: (value: boolean) => void,
    setMainTableData: React.Dispatch<React.SetStateAction<TableRow[]>>
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string | number }>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMainTableData((prev) => [...prev, formData]);
    openModal(false);
  };

  return { handleSubmit, setFormData };
}

export default addData;