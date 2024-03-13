import { createSlice } from "@reduxjs/toolkit"

import { ILoreOneState } from "./types"
import LoreOne from "../LoreOne"
import { ResLoreOneArr } from "../Resources/ResMockLoreOne"


export const initialState: ILoreOneState = {
    curPageLeft: 0,
    curPageRight: 0,
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
        PageBefore: state => {
            state.curPageRight -= 2
            state.curPageLeft -= 2
        },
        PageAfter: state => {
            state.curPageRight += 2
            state.curPageLeft += 2
        },
        SetBackground: (state, action) => {
            if (state.curBackID !== action.payload) {
                state.curBackID = action.payload;
                const foundBackground = ResLoreOneArr.find(background => background.ID === state.curBackID);
                if (foundBackground) {
                    state.curBack = [foundBackground]; // Присваиваем найденный объект, обернутый в массив
                    state.isShowBook = false;
                    state.Volume = 0.8;
                    state.curBackAudio = foundBackground.audio
                    state.curBackground = foundBackground.background
                } else {
                    state.curBack = []; // Обработка ситуации, когда объект не найден
                }
            }
        },
        BackgroundChange: state => {
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

export const { PageBefore, PageAfter, SetBackground } = LoreOneSlice.actions
export default LoreOneSlice.reducer
