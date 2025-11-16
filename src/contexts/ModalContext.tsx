import { useCallback, useContext, useState, createContext } from 'react';

type ModalContextType = {
  openModalName: string | null;
  openModal: (modalName: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openModalName, setOpenModalName] = useState<string | null>(null);

  const openModal = useCallback((modalName: string) => {
    setOpenModalName(modalName);
  }, []);

  const closeModal = useCallback(() => {
    setOpenModalName(null);
  }, []);

  const contextValue = {
    openModalName,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useGlobalModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useGlobalModal must be used within a ModalProvider');
  }
  return context;
};
