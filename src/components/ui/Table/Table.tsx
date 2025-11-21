import './Table.css';
import usePagination from '~/hooks/usePagination';
import useDeleteRow from '~/components/ui/Table/hooks/useDeleteRow';
import useRowNavigation from '~/components/ui/Table/hooks/useRowNavigation';
import TableRowItem from './TableRowItem/TableRowItem';
import type { TableProps, TableRowType } from '~/types/TableProps';
import Pagination from '~/components/ui/Pagination/Pagination';

const Table = <T extends TableRowType>({
  headers,
  data,
  setData,
}: TableProps<T>) => {
  const {
    activePage,
    countOfPages,
    handlePrev,
    handleNext,
    handlePrevDisabled,
    handleNextDisabled,
    currentPageData,
  } = usePagination(data ?? []); // remove everything except currentPageData
  const { handleRowClick } = useRowNavigation();
  const { handleDelete } = useDeleteRow(setData);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.id}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((row, indexRow) => (
            <TableRowItem
              key={indexRow}
              indexRow={indexRow}
              row={row}
              onRowClick={handleRowClick}
              headers={headers}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      <div className="bottom">
        <Pagination
          onPrev={handlePrev}
          prevDisabled={handlePrevDisabled}
          activePage={activePage}
          countOfPages={countOfPages}
          onNext={handleNext}
          nextDisabled={handleNextDisabled}
        />
      </div>
    </>
  );
};

export default Table;
