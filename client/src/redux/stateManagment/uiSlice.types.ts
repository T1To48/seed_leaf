import type { PayloadAction } from "@reduxjs/toolkit";

type IsMobile = boolean
interface UiState {
    isMobile: IsMobile
}

type ToggleMobile = PayloadAction<IsMobile>


export type{UiState,ToggleMobile}