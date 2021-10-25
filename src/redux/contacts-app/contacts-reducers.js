import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';

export const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});