import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';

export const crudStore = configureStore({
    reducer: {
        user: userReducer
    }
});

export type MainState = ReturnType<typeof crudStore.getState>;
export type AppDispatch = typeof crudStore.dispatch;