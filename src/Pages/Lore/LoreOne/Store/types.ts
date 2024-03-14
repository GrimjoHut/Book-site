import { BackMock } from './../../Mock/BackgroundMockOne';


export interface ILoreOneState {
    curPageLeftID: number, 
    curPageRightID: number
    curBackID: number,
    isShowBook: boolean,
    Volume: number, 
    curBackAudio: string,
    curBackground: string,
    curBack: BackMock[]
}