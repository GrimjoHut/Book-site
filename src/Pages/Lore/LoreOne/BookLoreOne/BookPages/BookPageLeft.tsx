// import styles from "./BookPageLeft.module.css"
import { useEffect, useState } from "react"
import { LoreOneArr } from "../../../Mock/PageMock"
import { useAppDispatch } from "../../../../../app/hooks"
import { SetBackground } from "../../Store/slices"


const BookPageLeft: React.FC = () => {
    const [curPageID, setCurPageID] = useState<number>(0)
    const dispatch = useAppDispatch()
    const curPage = LoreOneArr[curPageID]
    const HandleBack = () => {
      setCurPageID(curPageID-2)
      dispatch(SetBackground(curPage.BackgroundID))
    }

    
    return (
    <div className={curPage.Style}>
        <div>{curPage.text}</div>
        <div><img src = {curPage.Image}></img></div>
        <div><button onClick={HandleBack}></button></div>
    </div>
    )
}

export default BookPageLeft
