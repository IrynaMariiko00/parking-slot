import { useState } from 'react';

// TODO: add modal when car is leaving to test different modal states
const useModal = () => {
  // // name1 : state1
  // // name2 : state2
  // {
  //   "name1" : [isModalOpen, setIsModalOpen]
  // }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, setIsModalOpen, openModal, closeModal };
};

export default useModal;
