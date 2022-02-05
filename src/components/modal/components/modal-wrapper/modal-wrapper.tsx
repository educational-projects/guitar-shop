import { ReactNode } from 'react';

type ModalWrapperType = {
  children: ReactNode,
  onClose: () => void,
}

function ModalWrapper({children, onClose}: ModalWrapperType): JSX.Element {
  return (
    <div className="modal is-active modal-for-ui-kit">
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
