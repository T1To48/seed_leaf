import { createSlice } from "@reduxjs/toolkit";
import type { UiState } from "./uiSlice.types";




const initialState: UiState = {
    isMobile: true,
    counter:0
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleMobileMode: (state) => {
            const newVal = !state.isMobile;
            state.isMobile = newVal
        }
    }
})

export const {toggleMobileMode} = uiSlice.actions

// export const test = (state:RootState)=>state.ui.counter

export default uiSlice.reducer