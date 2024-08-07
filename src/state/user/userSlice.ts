import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  login: boolean;
  name: string;
}

const initialState: UserState = {
  login: false,
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state) => ({ ...state, login: true }),
    signOut: (state) => ({ ...state, name: "", login: false }),
    setName: (state, action: PayloadAction<string>) => ({
      ...state,
      name: action.payload,
    }),
  },
});

export const userActions = { ...userSlice.actions };
export default userSlice.reducer;
