import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../models/user.model";

const initialData: User = {
    name: '',
    email: '',
    phone: '',
    website: '',

}

const userSlice = createSlice({
    name: 'user',
    initialState: initialData,
    reducers: {
        saveUser: (state, action: PayloadAction<User>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.website = action.payload.website;
        }
    }
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;