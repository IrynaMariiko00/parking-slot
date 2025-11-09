import MainButton from '~/components/ui/mainButton/mainButton';
import Table from '~/components/ui/Table/Table';
import './DetailsPage.css';
import {
  secondaryTableData,
  secondaryTableHeaders,
} from '~/constants/tableData';
import useTableData from '~/components/ui/Table/hooks/useTableData';
import { MainButtonColors } from '~/types/dataButtonProps';
import useNavigation from '~/hooks/useNavigation';
import useForceBackNavigation from './hooks/useForceBackNavigation';

const DetailsPage = () => {
  const { data, addRandomData, deleteRandomData } =
    useTableData(secondaryTableData);

  const { handleGoBack } = useNavigation();
  useForceBackNavigation({ data: data });

  return (
    <section>
      <h1>Details</h1>
      <div onClick={handleGoBack} className="back-button">
        ← Go Back
      </div>
      <div className="buttons-container">
        <MainButton
          onAction={addRandomData}
          title="Add"
          color={MainButtonColors.Blue}
        />
        <MainButton
          onAction={deleteRandomData}
          title="Delete"
          color={MainButtonColors.Red}
        />
      </div>
      <Table headers={secondaryTableHeaders} data={data} />
    </section>
  );
};

export default DetailsPage;
