import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { KeyCode } from '../../const';

type ModalProps = {
  children: ReactNode,
  onClose: () => void,
  className?: string,
}

function Modal({children, onClose, className=''}: ModalProps): JSX.Element | null {
  const wrapperClass = `modal is-active ${className}`;

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
          <div className={wrapperClass}>
            <div className="modal__wrapper">
              <div className="modal__overlay" data-close-modal onClick={onClose}></div>
              <div className="modal__content">
                {children}
              </div>
            </div>
          </div>
        </RemoveScroll>
      </FocusLock>,
      modalRootElement,
    )
  );
}

export default Modal;
