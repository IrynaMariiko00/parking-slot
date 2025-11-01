import { useEffect, useState } from "react";
import { TableRow } from "~/types/tableProps";

const usePersistentTableData = (key: string, initialData: TableRow[] = []) => {
   const [data, setData] = useState<TableRow[]>(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialData;
    });

    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return { data, setData };
}

export default usePersistentTableData;