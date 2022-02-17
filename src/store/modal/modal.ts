import { createReducer } from '@reduxjs/toolkit';
import { ModalState } from '../../types/state';
import { setModalStatus, setModalType } from '../action';

const initialState: ModalState = {
  openModal: false,
  modalType: null,
};

const modal = createReducer(initialState, (builder) => {
  builder
    .addCase(setModalStatus, (state, action) => {
      const {status} = action.payload;
      state.openModal = status;
    })
    .addCase(setModalType, (state, action) => {
      const {type} = action.payload;
      state.modalType = type;
    });
});

export {modal};
