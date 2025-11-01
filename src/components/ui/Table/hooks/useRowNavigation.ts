import { useLocation, useNavigate } from "react-router-dom";

const navigateOnRowClick = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRowClick = (row: Record<string, unknown>) => {
    if (!location.pathname.includes('details')) {
      navigate(`/details/${row.name}`);
    }
  };

  return { handleRowClick };
}

export default navigateOnRowClick;