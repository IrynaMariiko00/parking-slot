export type ConfirmationModalProps = {
  title: string;
  description?: string;
  onClick: () => void;
  onClose: () => void;
  isNoButton: boolean;
};
