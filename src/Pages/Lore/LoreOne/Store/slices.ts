import { createSlice } from "@reduxjs/toolkit"

import { ILoreOneState } from "./types"
import LoreOne from "../LoreOne"
import { BackMockOne } from "../../Mock/BackgroundMockOne"


export const initialState: ILoreOneState = {
    curBackID: 1,
    isShowBook: true,
    Volume: 0.2,
    curBackAudio: "txt",
    curBackground: "txt",
    curBack: []
}

export const LoreOneSlice = createSlice({
    name: "LoreOne",
    initialState,
    reducers: {
        SetBackground: (state, action) => {
            if (state.curBackID != action.payload) {
                state.curBackID = action.payload
                const foundBackground = BackMockOne.find(background => background.ID === state.curBackID);
                if (foundBackground) {
                    state.curBack = [foundBackground]; // Присваиваем найденный объект, обернутый в массив
                    state.isShowBook = false;
                    state.Volume = 0.8;
                    state.curBackAudio = foundBackground.Backaudio
                    state.curBackground = foundBackground.BackImage
                } else {
                    console.log('Пупупу')
                }
            }
        },
        BackgroundShowChange: state => {
            if (state.isShowBook === true) {
                state.isShowBook = false
                state.Volume = 0.7
            } else {
                state.isShowBook = true
                state.Volume = 0.2
            }
        }
    }
})

export const { SetBackground, BackgroundShowChange } = LoreOneSlice.actions
export default LoreOneSlice.reducer
