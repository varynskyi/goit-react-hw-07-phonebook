import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import { contactsApi } from './contacts-app/contacts-operations';
import { filter } from './contacts-app/contacts-reducers';

const contacts = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter,
});

export const store = configureStore({
  reducer: contacts,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
