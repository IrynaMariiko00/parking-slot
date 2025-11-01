import MainButton from '~/components/ui/mainButton/mainButton';
import Table from '~/components/ui/Table/Table';
import './DetailsPage.css';
import {
  secondaryTableData,
  secondaryTableHeaders,
} from '~/constants/tableData';
import useTableData from '~/components/ui/Table/hooks/useTableData';

const detailsHaders = secondaryTableHeaders;
const detailsData = secondaryTableData;

const DetailsPage = () => {
 const {data, addRandomData, deleteRandomData} = useTableData(detailsData);

  return (
    <section>
      <h1>Details</h1>
      <div className="buttons-container">
        <MainButton onAction={addRandomData} title='Add' color='blue'/>
        <MainButton onAction={deleteRandomData} title='Delete' color='red'/>
      </div>
      <Table headers={detailsHaders} data={data} />
    </section>
  );
};

export default DetailsPage;
