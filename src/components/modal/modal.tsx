import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { KeyCode } from '../../const';
import ModalWrapper from './components/modal-wrapper/modal-wrapper';

type ModalProps = {
  children: ReactNode,
  onClose: () => void,
}

function Modal({children, onClose}: ModalProps): JSX.Element | null {
  let modalRootElement = document.querySelector('#modal');

  if (!modalRootElement) {
    modalRootElement = document.createElement('div');
    modalRootElement.setAttribute('id', 'modal');
    document.body.appendChild(modalRootElement);
  }

  useEffect(() => {
    const handleEscKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === KeyCode.Esc) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKeyDown);

    return () => {
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [onClose]);

  return (
    createPortal(
      <FocusLock>
        <RemoveScroll>
          <ModalWrapper onClose={onClose}>
            {children}
          </ModalWrapper>
        </RemoveScroll>
      </FocusLock>,
      modalRootElement,
    )
  );
}

export default Modal;
