import type { TableProps } from '~/types/TableProps';
import './Table.css';
import deleteIcon from '~/assets/icons/deleteIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Table: React.FC<TableProps> = ({ headers, data, setData }) => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);

  const countOfPages = Math.ceil((data?.length ?? 0) / 5);

  const handlePrev = () => {
    setActivePage(() => activePage - 1);
  };

  const handlePrevDisabled = activePage === 1;

  const handleNext = () => {
    setActivePage(() => activePage + 1);
  };

  const handleNextDisabled = activePage === countOfPages;

  const sliceData = (data: Record<string, unknown>[], rows = 5) => {
    const copyData = [...data];
    const slicedData: Record<string, unknown>[][] = [];

    while (copyData.length > 0) {
      const page = copyData.splice(0, rows);

      slicedData.push(page);
    }

    return slicedData;
  };

  const paginatedData = data ? sliceData(data) : [];
  const currentPageData = paginatedData[activePage - 1] || [];

  const handleDelete = (index: number) => {
    setData?.((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRowClick = (row: Record<string, unknown>) => {
    navigate(`/details/${row.name}`);
  };

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
          <tr key={indexRow} onClick={() => handleRowClick(row)}>
            {headers.map((header) => (
              <td key={header.id}>
                {header.id === 'delete' ? (
                  <img
                    className="delete-icon"
                    alt="delete"
                    src={deleteIcon}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(indexRow);
                    }}
                  />
                ) : (
                  String(row[header.id] ?? '')
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    <div className="bottom">
      <button onClick={handlePrev} disabled={handlePrevDisabled}>{'<'}</button>
      {activePage > 1 && (
        <div>{activePage - 1}</div>
      )}
      <div>{activePage}</div>
      {activePage < countOfPages && (
        <div>{activePage + 1}</div>
      )}
      <button onClick={handleNext} disabled={handleNextDisabled}>{'>'}</button>
    </div>
    </>
  );
};

export default Table;
