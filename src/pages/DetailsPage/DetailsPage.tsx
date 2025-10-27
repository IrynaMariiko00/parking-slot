import Table from '~/components/ui/Table/Table';
import {
  secondaryTableData,
  secondaryTableHeaders,
} from '~/constants/tableData';

const detailsHaders = secondaryTableHeaders;
const detailsData = secondaryTableData;

const DetailsPage = () => {
  return (
    <section>
      <h1>Details</h1>
      <Table headers={detailsHaders} data={detailsData} />
    </section>
  );
};

export default DetailsPage;
