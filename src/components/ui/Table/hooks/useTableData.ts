import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePreviousRoute } from "~/hooks/usePreviousRoute";
import { TableRow } from "~/types/tableProps";
import { createExistingData, getRandomRow } from "~/utils/dataUtils";

const useTableData = (detailsData: TableRow[]) => {
  const [data, setData] = useState<TableRow[]>(createExistingData(detailsData));

  const previousPath = usePreviousRoute();
  const navigate = useNavigate();


  const addRandomData = () => {
    setData(prev => [...prev, getRandomRow(detailsData)]);
  };

  const deleteRandomData = () => {
    setData((prev) => {
        if (prev.length === 0) return prev;
        const rowToDelete = getRandomRow(prev);
        return prev.filter(row => row.id !== rowToDelete.id);
    });
  };

  useEffect(() => {
    if (data.length === 0) {
      navigate(previousPath || "/details");
    }
  }, [data, navigate, previousPath]);

    
  return { data, addRandomData, deleteRandomData };
}

export default useTableData;