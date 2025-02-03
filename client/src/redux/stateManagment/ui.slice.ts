import { createSlice } from "@reduxjs/toolkit";
import type { UiState,ToggleMobile } from "./uiSlice.types";



const initialState: UiState = {
    isMobile: true,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleMobileMode: (state,action:ToggleMobile) => {
            state.isMobile = action.payload
        }
    }
})

export const {toggleMobileMode} = uiSlice.actions

// export const test = (state:RootState)=>state.ui.counter

export default uiSlice.reducer