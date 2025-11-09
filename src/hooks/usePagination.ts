import { useEffect, useState } from 'react';
import { TableRow } from '~/types/TableProps';

const usePagination = (data: TableRow[], rowsPerPage = 5) => {
  const [activePage, setActivePage] = useState(1);

  const countOfPages = Math.ceil((data?.length ?? 0) / rowsPerPage);

  const handlePrevDisabled = activePage === 1;

  const handleNext = () => {
    setActivePage(() => activePage + 1);
  };

  const handleNextDisabled = countOfPages === 0 || activePage === countOfPages;

  const sliceData = (data: TableRow[], rowsPerPage = 5) => {
    const result: TableRow[][] = [];

    for (let i = 0; i < data.length; i += rowsPerPage) {
      result.push(data.slice(i, i + rowsPerPage));
    }

    return result;
  };

  const paginatedData = data ? sliceData(data) : [];
  const currentPageData = paginatedData[activePage - 1] || [];

  const emptyPage = currentPageData.length === 0;

  useEffect(() => {
    if (emptyPage && activePage > 1) {
      setActivePage((prev) => prev - 1);
    }
  }, [data, emptyPage]);

  const handlePrev = () => {
    setActivePage(() => activePage - 1);
  };

  useEffect(() => {}, [data]);

  return {
    activePage,
    countOfPages,
    handlePrev,
    handleNext,
    handlePrevDisabled,
    handleNextDisabled,
    currentPageData,
  };
};

export default usePagination;
