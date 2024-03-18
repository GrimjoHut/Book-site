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
        <div className="RightTopImg">
        <div className="PageText">
            <div className="Text">{curPage.text}</div>
            <div className="ButtonContainer">
                <button onClick={HandleBack}></button>
            </div>
        </div>
        <div className="PageImageContainer">
            <img className="PageImage" src={curPage.Image} />
        </div>
    </div>
    )
}

export default BookPageLeft
