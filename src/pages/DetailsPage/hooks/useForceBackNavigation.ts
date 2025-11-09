import useNavigation from '~/hooks/useNavigation';
import { TableRow } from '~/types/TableProps';

const useForceBackNavigation = ({ data }: { data: TableRow[] }) => {
  const { handleGoBack } = useNavigation();

  if (data.length === 0) {
    handleGoBack();
  }
};

export default useForceBackNavigation;
