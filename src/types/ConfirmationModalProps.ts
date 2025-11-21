export type ConfirmationModalProps = {
  title: string;
  description?: string;
  onConfirm: () => void;
  onClose: () => void;
  displayNoButton: boolean;
};
