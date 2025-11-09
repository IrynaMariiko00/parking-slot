import './Table.css';
import usePagination from '~/hooks/usePagination';
import useDeleteRow from '~/components/ui/Table/hooks/useDeleteRow';
import useRowNavigation from '~/components/ui/Table/hooks/useRowNavigation';
import TableRowItem from './TableRowItem/TableRowItem';
import type { TableProps, TableRow } from '~/types/TableProps';
import Pagination from '~/components/ui/Pagination/Pagination';

const Table: React.FC<TableProps> = ({ headers, data, setData }) => {
  const {
    activePage,
    countOfPages,
    handlePrev,
    handleNext,
    handlePrevDisabled,
    handleNextDisabled,
    currentPageData,
  } = usePagination((data as TableRow[]) ?? []);
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
              row={row as TableRow}
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
