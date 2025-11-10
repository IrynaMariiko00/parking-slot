import { useEffect, useState } from "react";
import { TableRowType } from "~/types/TableProps";

const usePersistentTableData = <T extends TableRowType>(key: string, initialData: T[] = []) => {
   const [data, setData] = useState<T[]>(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialData;
    });

    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return { data, setData };
}

export default usePersistentTableData;