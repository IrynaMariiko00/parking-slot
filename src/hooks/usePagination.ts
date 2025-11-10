import { useEffect, useState } from 'react';
import { TableRowType } from '~/types/TableProps';

const defaultRowsPerPage = 5;

const usePagination = <T extends TableRowType>(data: T[], rowsPerPage = defaultRowsPerPage) => {
  const [activePage, setActivePage] = useState(1);

  const countOfPages = Math.ceil((data?.length ?? 0) / rowsPerPage);

  const handlePrevDisabled = activePage === 1;
  const handleNextDisabled = countOfPages === 0 || activePage === countOfPages;

  const sliceData = () => {
    const result: T[][] = [];

    for (let i = 0; i < data.length; i += rowsPerPage) {
      result.push(data.slice(i, i + rowsPerPage));
    }

    return result;
  };

  const paginatedData = data ? sliceData() : [];
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

  const handleNext = () => {
    setActivePage(() => activePage + 1);
  };

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
