import useNavigation from '~/hooks/useNavigation';
import { TableRowType } from '~/types/TableProps';

const useForceBackNavigation = <T extends TableRowType>({ data }: { data: T[] }) => {
  const { handleGoBack } = useNavigation();

  if (data.length === 0) {
    handleGoBack();
  }
};

export default useForceBackNavigation;
