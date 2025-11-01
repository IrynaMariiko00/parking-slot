export interface PaginationProps {
  onPrev: () => void,
  prevDisabled: boolean,
  activePage: number,
  countOfPages: number,
  onNext: () => void,
  nextDisabled: boolean;
}
