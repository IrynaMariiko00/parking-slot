import { useState } from 'react';
import { createExistingData, getRandomRow } from '~/utils/dataUtils';

const useTableData = <T extends Record<string, unknown >>(detailsData: T[]) => {
  const [data, setData] = useState<T[]>(createExistingData(detailsData));

  const addRandomData = () => {
    setData((prev) => [...prev, getRandomRow(detailsData)]);
  };

  const deleteRandomData = () => {
    setData((prev) => {
      if (prev.length === 0) return prev;
      const rowToDelete = getRandomRow(prev);
      return prev.filter((row) => row.id !== rowToDelete.id);
    });
  };

  return { data, addRandomData, deleteRandomData };
};

export default useTableData;
