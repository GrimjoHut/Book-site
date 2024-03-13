import { ResMockLoreOne } from "../Resources/ResMockLoreOne"


export interface ILoreOneState {
    curPageRight: number,
    curPageLeft: number, 
    curBackID: number,
    isShowBook: boolean,
    Volume: number, 
    curBackAudio: string,
    curBackground: string,
    curBack: ResMockLoreOne[]
}