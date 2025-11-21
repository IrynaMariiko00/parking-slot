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

  const getCellView = (header: TableHeaders) => {
    const key = header.id as keyof T;

    if (header.id === 'delete') {
      return (
        <img
          className="delete-icon"
          alt="delete"
          src={deleteIcon}
          onClick={(e) => {
            e.stopPropagation();
            openModal();
          }}
        />
      );
    }

    if (header.id === 'color') {
      return (
        <span
          className={`color-box color-${row.color}`}
          title={row.color as string}
        />
      );
    }

    return `${row[key]}`;
  };

  return (
    <>
      <tr key={indexRow} onClick={() => onRowClick(row)} className="row">
        {headers.map((header: TableHeaders) => (
          <td key={header.id}>{getCellView(header)}</td>
        ))}
      </tr>
      <ModalWrapper isOpen={isModalOpen} onClose={closeModal}>
        <ConfirmationModal
          title={title}
          onConfirm={onClick}
          onClose={closeModal}
          displayNoButton={true}
        />
      </ModalWrapper>
    </>
  );
};

export default TableRowItem;
