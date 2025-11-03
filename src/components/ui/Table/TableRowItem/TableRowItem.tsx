import deleteIcon from '~/assets/icons/deleteIcon.svg';
import { TableHeaders, TableRowProps, TableRow } from '~/types/tableProps';
import './TableRowItem.css';

const TableRowItem: React.FC<TableRowProps> = ({
  indexRow,
  row,
  onRowClick,
  headers,
  onDelete,
}) => {
  return (
    <tr key={indexRow} onClick={() => onRowClick(row)} className="row">
      {headers.map((header: TableHeaders) => {
        const key = header.id as keyof TableRow;
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
                title={row.color}
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
