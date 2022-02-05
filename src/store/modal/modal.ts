import { createReducer } from '@reduxjs/toolkit';
import { ModalState } from '../../types/state';
import { setModalStatus } from '../action';

const initialState: ModalState = {
  openModal: false,
};

const modal = createReducer(initialState, (builder) => {
  builder
    .addCase(setModalStatus, (state, action) => {
      const {status} = action.payload;
      state.openModal = status;
    });
});

export {modal};
