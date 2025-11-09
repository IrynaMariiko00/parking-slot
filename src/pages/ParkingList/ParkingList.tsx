import Table from '~/components/ui/Table/Table';
import { mainTableHeaders } from '~/constants/tableData';
import AddDataModal from '~/components/ui/addDataModal/addDataModal';
import './ParkingList.css';
import MainButton from '~/components/ui/mainButton/mainButton';
import usePersistentTableData from '~/components/ui/Table/hooks/usePersistentTableData';
import useModal from '~/components/ui/ModalWrapper/hooks/useModal';
import ModalWrapper from '~/components/ui/ModalWrapper/ModalWrapper';
import { MainButtonColors } from '~/types/dataButtonProps';

const ParkingList = () => {
  const { data: mainTableData, setData: setMainTableData } =
    usePersistentTableData('mainTableData');

  const { isModalOpen, setIsModalOpen, openModal, closeModal } = useModal();

  return (
    <section className="parking-list">
      <h1>Parking Slots</h1>
      <div className="button-container">
        <MainButton
          title="Add"
          onAction={openModal}
          color={MainButtonColors.Blue}
        />
      </div>
      <ModalWrapper isOpen={isModalOpen} onClose={closeModal}>
        <AddDataModal
          openModal={setIsModalOpen}
          setMainTableData={setMainTableData}
        />
      </ModalWrapper>

      <Table
        headers={mainTableHeaders}
        data={mainTableData}
        setData={setMainTableData}
      />
    </section>
  );
};

export default ParkingList;
