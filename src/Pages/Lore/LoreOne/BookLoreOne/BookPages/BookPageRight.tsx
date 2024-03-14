import { LoreOneArr } from "../../../Mock/PageMock"
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"
import { NextPage, PreviousPage, SetBackground } from "../../Store/slices"


const BookPageRight: React.FC = () => {
    const state = useAppSelector(state => state.LoreOne)
    const dispatch = useAppDispatch()
    const curPage = LoreOneArr[state.curPageRightID]
    const HandleBack = () => {
        dispatch(NextPage())
        dispatch(SetBackground(curPage.BackgroundID))
    }


    return (
        <div className={curPage.Style}>
            <div>{curPage.text}</div>
            <div><img src={curPage.Image}></img></div>
            <div><button onClick={HandleBack}></button></div>
        </div>
    )
}

export default BookPageRight
