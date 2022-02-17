import { setModalStatus, setModalType } from '../action';
import { modal } from './modal';

const state = {
  openModal: false,
  modalType: null,
};

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {
    expect(modal(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  it('should update the status of the window by getting the status', () => {
    expect(modal(state, setModalStatus(true)))
      .toEqual({...state, openModal: true});
  });
  it('should change the window type by getting the type', () => {
    const typeModal = 'test';

    expect(modal(state, setModalType(typeModal)))
      .toEqual({...state, modalType: typeModal});
  });
});
