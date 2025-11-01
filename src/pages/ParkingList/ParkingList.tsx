import Table from '~/components/ui/Table/Table';
import { mainTableHeaders, secondaryTableData } from '~/constants/tableData';
import AddDataPopup from '~/components/ui/addDataPopup/addDataPopup';
import './ParkingList.css';
import MainButton from '~/components/ui/mainButton/mainButton';
import usePersistentTableData from '~/components/ui/Table/hooks/usePersistentTableData';
import usePopup from '~/components/ui/PopupWrapper/hooks/usePopup';
import PopupWrapper from '~/components/ui/PopupWrapper/PopupWrapper';

const ParkingList = () => {
  const { data: mainTableData, setData: setMainTableData } = usePersistentTableData('mainTableData');
  const { isPopupOpen, setIsPopupOpen, openPopup, closePopup } = usePopup();
 
  const mainHeaders = mainTableHeaders;

  return (
    <section className="parking-list">xs
      <h1>Parking Slots</h1>
      <div className="button-container">
        <MainButton title="Add" onAction={openPopup} color='blue'/>
      </div>
      {isPopupOpen && (
        <PopupWrapper onClose={closePopup}>
          <AddDataPopup
            openPopup={setIsPopupOpen}
            setMainTableData={setMainTableData}
          />
        </PopupWrapper>
      )}
      <Table
        headers={mainHeaders}
        data={mainTableData}
        setData={setMainTableData}
      />
    </section>
  );
};

export default ParkingList;
