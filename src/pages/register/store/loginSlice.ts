import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState {
    email: string | null
}

const initialState: IState = {
    email: null
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoginData: (state, action: PayloadAction<IState>) => {
            state.email = action.payload.email
        }
    }
})

export const { setLoginData } = loginSlice.actions
export default loginSlice.reducer