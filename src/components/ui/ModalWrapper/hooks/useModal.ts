import { useGlobalModal } from '~/contexts/ModalContext';

const useModal = (modalName: string) => {
  const { openModalName, openModal, closeModal } = useGlobalModal();

  const isModalOpen = openModalName === modalName;

  return {
    isModalOpen,
    openModal: () => openModal(modalName),
    closeModal,
  };
};

export default useModal;