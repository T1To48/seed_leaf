import { createSlice } from "@reduxjs/toolkit";
import type { UiState,ToggleBool } from "./uiSlice.types";



const initialState: UiState = {
    isMobile: false,
    isHamburgerMenuOpen:false
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleMobileMode: (state,action:ToggleBool) => {
            state.isMobile = action.payload
        },
        toggleHamburgerMenu:(state, action:ToggleBool)=>{
            state.isHamburgerMenuOpen=action.payload
        }

    }
})

export const {toggleMobileMode, toggleHamburgerMenu} = uiSlice.actions

// export const test = (state:RootState)=>state.ui.counter

export default uiSlice.reducer