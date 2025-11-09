export enum MainButtonColors {
  Red = 'red',
  Blue = 'blue',
}

export type DataButtonProps = {
  title: string;
  onAction: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: MainButtonColors;
};
