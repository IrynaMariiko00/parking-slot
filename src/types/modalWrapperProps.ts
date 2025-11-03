export interface ModalWrapperProps {
  onClose: () => void;
  children: React.ReactNode;
  isOpen: boolean;
}