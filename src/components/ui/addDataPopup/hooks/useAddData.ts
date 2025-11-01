import { useState } from "react";
import { TableRow } from "~/types/tableProps";

const addData = ({openPopup, setMainTableData}: {
    openPopup: (value: boolean) => void,
    setMainTableData: React.Dispatch<React.SetStateAction<TableRow[]>>
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string | number }>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMainTableData((prev) => [...prev, formData]);
    openPopup(false);
  };

  return { handleSubmit, setFormData };
}

export default addData;