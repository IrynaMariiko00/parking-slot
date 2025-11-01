export type DataButtonProps = {
  title: string
  onAction: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: 'red' | 'blue';
};
