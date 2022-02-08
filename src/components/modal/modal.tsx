import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

type ModalProps = {
  children: ReactNode,
}

function Modal({children}: ModalProps): JSX.Element | null {
  let modalRootElement = document.querySelector('#modal');

  if (!modalRootElement) {
    modalRootElement = document.createElement('div');
    modalRootElement.setAttribute('id', 'modal');
    document.body.appendChild(modalRootElement);
  }

  return (
    createPortal(
      <FocusLock>
        <RemoveScroll>
          {children}
        </RemoveScroll>
      </FocusLock>,
      modalRootElement,
    )
  );
}

export default Modal;
