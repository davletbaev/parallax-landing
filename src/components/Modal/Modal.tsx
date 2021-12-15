import React, { ReactNode, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import classnames from 'classnames/bind';

import * as styles from './Modal.module.scss';

const cn = classnames.bind(styles);

type ModalProps = {
  label: string,
  className?: string,
  onOpen?: () => void,
  onClose?: () => void,
  closeOnOverlayClick?: boolean,
  children: ReactNode
}

export type ModalRef = {
  isOpen: boolean,
  openModal: () => void,
  closeModal: () => void,
  toggleModal: () => void,
}

ReactModal.setAppElement('#___gatsby');

const Modal = React.forwardRef<ModalRef, ModalProps>(({
  className,
  label,
  onOpen,
  onClose,
  closeOnOverlayClick,
  children,
}, ref) => {
  const openingTimeout = useRef<ReturnType<typeof setTimeout>>();
  const closingTimeout = useRef<ReturnType<typeof setTimeout>>();

  const [ isOpen, setOpen ] = useState(false);

  const [ opening, setOpening ] = useState(false);
  const [ closing, setClosing ] = useState(false);

  const portalClassname = cn('portal');

  const overlayClassName = cn(
    'overlay',
    isOpen && 'open',
    opening && 'opening',
    closing && 'closing',
    opening && 'transitionFadeIn',
    closing && 'transitionFadeExit',
  );

  const contentClassName = cn(
    'content',
    isOpen && 'open',
    'transitionFade',
    opening && 'transitionFadeIn',
    closing && 'transitionFadeExit',
    className,
  );

  const handleOpen = () => {
    setOpening(true);
    setOpen(true);
    openingTimeout.current = setTimeout(() => setOpening(false), 350);
  };

  const handleClose = () => {
    setClosing(true);
    setOpen(false);
    closingTimeout.current = setTimeout(() => setClosing(false), 350);
  };

  const handleToggle = () => {
    console.log(isOpen);

    return isOpen ? handleClose() : handleOpen();
  };

  useEffect(() => () => {
    if (openingTimeout.current) {
      clearTimeout(openingTimeout.current);
    }

    if (closingTimeout.current) {
      clearTimeout(closingTimeout.current);
    }
  }, []);

  useImperativeHandle(ref, (): ModalRef => ({
    isOpen,
    openModal: handleOpen,
    closeModal: handleClose,
    toggleModal: handleToggle
  }));

  return (
    <ReactModal
      isOpen={ isOpen }
      closeTimeoutMS={ 350 }
      onRequestClose={ handleClose }
      onAfterOpen={ onOpen }
      onAfterClose={ onClose }
      contentLabel={ label }
      portalClassName={ portalClassname }
      overlayClassName={ overlayClassName }
      shouldCloseOnEsc={ closeOnOverlayClick }
      shouldCloseOnOverlayClick={ closeOnOverlayClick }
      className={ contentClassName }
      bodyOpenClassName="body--modal-open"
      htmlOpenClassName="html--modal-open"
    >
      { children }
    </ReactModal>
  );
});

Modal.displayName = 'Modal';

export default Modal;
