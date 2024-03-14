import { BackMock } from './../../Mock/BackgroundMockOne';


export interface ILoreOneState {
    curBackID: number,
    isShowBook: boolean,
    Volume: number, 
    curBackAudio: string,
    curBackground: string,
    curBack: BackMock[]
}