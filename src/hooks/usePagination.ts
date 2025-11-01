import { useState } from "react";
import { TableRow } from "~/types/tableProps";

const usePagination =  <T extends Record<string, unknown>>(data: T[], rowsPerPage = 5) => {
const [activePage, setActivePage] = useState(1);

  const countOfPages = Math.ceil((data?.length ?? 0) / rowsPerPage);

  const handlePrev = () => {
    setActivePage(() => activePage - 1);
  };

  const handlePrevDisabled = activePage === 1;

  const handleNext = () => {
    setActivePage(() => activePage + 1);
  };

  const handleNextDisabled = activePage === countOfPages;

  const sliceData = <T extends Record<string, unknown>>(data: T[], rowsPerPage = 5): T[][] => {
    const result: T[][] = [];

    for (let i = 0; i < data.length; i += rowsPerPage) { 
      result.push(data.slice(i, i + rowsPerPage));
    }

    return result;
  };

  const paginatedData = data ? sliceData(data) : [];
  const currentPageData = paginatedData[activePage - 1] || [];

  return { activePage, countOfPages, handlePrev, handleNext, handlePrevDisabled, handleNextDisabled, currentPageData };
}

export default usePagination;