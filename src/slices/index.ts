// slices/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { dataReducer } from './dataSlice';
import { uiReducer } from './uiSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

type RootState = ReturnType<typeof store.getState>;

type Appdispatch = typeof store.dispatch;

export const useAppDispatch: () => Appdispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
