import { ReactNode, useEffect } from 'react';
import { KeyCode } from '../../../../const';

type ModalWrapperType = {
  children: ReactNode,
  onClose: () => void,
  className?: string,
}

function ModalWrapper({children, onClose, className=''}: ModalWrapperType): JSX.Element {
  const wrapperClass = `modal is-active ${className}`;

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
    <div className={wrapperClass}>
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal onClick={onClose}></div>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalWrapper;
