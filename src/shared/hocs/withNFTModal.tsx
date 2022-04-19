import React, { ComponentType, createContext, useContext, useEffect, useRef } from 'react';

import FreeNFTModal from '@modules/FreeNFTModal';

import { ModalRef } from '@components/Modal';

import useQueryParams from '@shared/hooks/useQueryParams';

type ModalContext = {
  openModal: () => void,
  closeModal: () => void,
}

const ModalContext = createContext<ModalContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openModal: () => {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeModal: () => {
  },
});

function withNFTModal(WrappedComponent: ComponentType) {
  function WithNFTModal(props: any) {
    const modalRef = useRef<ModalRef>(null);
    const query = useQueryParams();

    const handleModalOpen = () => {
      if (!modalRef.current) return;

      modalRef.current.openModal();
    };

    const handleModalClose = () => {
      if (!modalRef.current) return;

      modalRef.current.closeModal();
    };

    useEffect(() => {
      if (!query) return;

      if (query.has('secret') && query.has('uuid')) {
        handleModalOpen();
      }
    }, [ query ]);

    const contextValue = {
      openModal: handleModalOpen,
      closeModal: handleModalClose
    };

    return (
      <ModalContext.Provider value={ contextValue }>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <WrappedComponent { ...props } />

        <FreeNFTModal ref={ modalRef } onClose={ handleModalClose }/>
      </ModalContext.Provider>
    );
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithNFTModal.displayName = `withNFTModal(${wrappedComponentName})`;

  return WithNFTModal;
}

export const useNFTModal = () => useContext(ModalContext);

export default withNFTModal;