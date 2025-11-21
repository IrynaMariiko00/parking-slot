import type { PaginationProps } from '~/types/paginationProps';
import './Pagination.css';

// replace props with usePagination
const Pagination: React.FC<PaginationProps> = ({
  onPrev,
  prevDisabled,
  activePage,
  countOfPages,
  onNext,
  nextDisabled,
}) => {
  return (
    <div className="pagination">
      <button onClick={onPrev} disabled={prevDisabled}>
        {'<'}
      </button>
      {activePage > 1 && <div>{activePage - 1}</div>}
      <div>{activePage}</div>
      {activePage < countOfPages && <div>{activePage + 1}</div>}
      <button onClick={onNext} disabled={nextDisabled}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
