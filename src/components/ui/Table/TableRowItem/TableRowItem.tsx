import deleteIcon from '~/assets/icons/deleteIcon.svg';
import { TableHeaders, TableRowProps, TableRowType } from '~/types/TableProps';
import './TableRowItem.css';

const TableRowItem = <T extends TableRowType>({
  indexRow,
  row,
  onRowClick,
  headers,
  onDelete,
}: TableRowProps<T>) => {
  return (
    <tr key={indexRow} onClick={() => onRowClick(row)} className="row">
      {headers.map((header: TableHeaders) => {
        const key = header.id as keyof T;
        return (
          <td key={header.id}>
            {header.id === 'delete' ? (
              <img
                className="delete-icon"
                alt="delete"
                src={deleteIcon}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(indexRow);
                }}
              />
            ) : header.id === 'color' ? (
              <span
                className={`color-box color-${row.color}`}
                title={row.color as string}
              />
            ) : (
              String(row[key] ?? '')
            )}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRowItem;
