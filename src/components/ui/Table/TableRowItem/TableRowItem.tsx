import deleteIcon from '~/assets/icons/deleteIcon.svg';
import { TableHeaders, TableRowProps } from '~/types/tableProps';

const TableRowItem: React.FC<TableRowProps> = ({ indexRow, row, onRowClick, headers,onDelete }) => {
  return (
    <tr key={indexRow} onClick={() => onRowClick(row)}>
            {headers.map((header: TableHeaders) => (
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
            ) : (
            String(row[header.id] ?? '')
          )}
        </td>
      ))}
    </tr>
  )   
}

export default TableRowItem;