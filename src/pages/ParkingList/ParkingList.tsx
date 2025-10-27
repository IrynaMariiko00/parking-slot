import { useEffect, useState } from 'react';
import Table from '~/components/ui/Table/Table';
import { mainTableHeaders } from '~/constants/tableData';
import AddDataPopup from '~/components/ui/addDataPopup/addDataPopup';
import './ParkingList.css';
import type { TableRow } from '~/types/TableProps';
import AddButton from '~/components/ui/addButton/addButton';

const ParkingList = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mainTableData, setMainTableData] = useState<TableRow[]>(() => {
    const saved = localStorage.getItem('mainTableData');
    return saved ? JSON.parse(saved) : [];
  });

  const mainHeaders = mainTableHeaders;

  useEffect(() => {
    localStorage.setItem('mainTableData', JSON.stringify(mainTableData));
  }, [mainTableData]);

  const addData = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section className="parking-list">
      <h1>Parking Slots</h1>
      <AddButton addData={addData} />
      {isPopupOpen && (
        <>
          <div className="overlay" onClick={() => setIsPopupOpen(false)}></div>
          <AddDataPopup
            openPopup={setIsPopupOpen}
            setMainTableData={setMainTableData}
          />
        </>
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
