// import styles from "./BookPageLeft.module.css"
import { LoreOneArr } from "../../../Mock/PageMock"
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"
import { PreviousPage, SetBackground } from "../../Store/slices"


const BookPageLeft: React.FC = () => {
    const state = useAppSelector(state => state.LoreOne)
    const dispatch = useAppDispatch()
    const curPage = LoreOneArr[state.curPageLeftID]
    const HandleBack = () => {
        dispatch(PreviousPage())
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

export default BookPageLeft
