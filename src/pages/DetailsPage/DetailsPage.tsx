import MainButton from '~/components/ui/mainButton/mainButton';
import Table from '~/components/ui/Table/Table';
import './DetailsPage.css';
import {
  secondaryTableData,
  secondaryTableHeaders,
} from '~/constants/tableData';
import useTableData from '~/components/ui/Table/hooks/useTableData';
import { MainButtonColors } from '~/types/dataButtonProps';

const DetailsPage = () => {
 const {data, addRandomData, deleteRandomData} = useTableData(secondaryTableData);
 
  return (
    <section>
      <h1>Details</h1>
      <div className="buttons-container">
        <MainButton onAction={addRandomData} title='Add' color={MainButtonColors.Blue}/>
        <MainButton onAction={deleteRandomData} title='Delete' color={MainButtonColors.Red}/>
      </div>
      <Table headers={secondaryTableHeaders} data={data} />
    </section>
  );
};

export default DetailsPage;
