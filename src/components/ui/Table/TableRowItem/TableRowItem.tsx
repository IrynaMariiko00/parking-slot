import deleteIcon from '~/assets/icons/deleteIcon.svg';
import { TableHeaders, TableRowProps, TableRowType } from '~/types/TableProps';
import './TableRowItem.css';
import useModal from '~/components/ui/ModalWrapper/hooks/useModal';
import ModalWrapper from '~/components/ui/ModalWrapper/ModalWrapper';
import ConfirmationModal from '~/components/ui/ConfirmationModal/ConfirmationModal';

const ADD_MODAL_NAME = 'DeleteParkingSlotModal';

const TableRowItem = <T extends TableRowType>({
  indexRow,
  row,
  onRowClick,
  headers,
  onDelete,
}: TableRowProps<T>) => {
  const { isModalOpen, openModal, closeModal } = useModal(ADD_MODAL_NAME);

  const title = 'Are you sure you want to delete this row?';

  const onClick = () => {
    onDelete(indexRow);
    closeModal();
  };

  return (
    <>
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
                  /* onClick={(e) => {
                  e.stopPropagation();
                  onDelete(indexRow);
                }}
                 */
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal();
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
      <ModalWrapper isOpen={isModalOpen} onClose={closeModal}>
        <ConfirmationModal
          title={title}
          onClick={onClick}
          onClose={closeModal}
          isNoButton={true}
        />
      </ModalWrapper>
    </>
  );
};

export default TableRowItem;
