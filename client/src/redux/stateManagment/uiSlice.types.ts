import type { PayloadAction } from "@reduxjs/toolkit";

// type IsMobile = boolean
// type IsHamburgerMenuOpen = boolean

interface UiState {
    isMobile: boolean,
    isHamburgerMenuOpen:boolean
}

type ToggleBool = PayloadAction<boolean>

export type{UiState,ToggleBool}