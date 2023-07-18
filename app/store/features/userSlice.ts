import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  name: string;
  email: string;
}

export const initialUserState: UserState = {
  id: "",
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    createUser: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
    },
    deleteUser: (state) => {
      return initialUserState;
    },
  },
});

export const { createUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
