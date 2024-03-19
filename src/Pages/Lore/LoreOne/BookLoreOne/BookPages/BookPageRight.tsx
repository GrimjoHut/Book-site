import { LoreOneArr } from "../../../Mock/PageMock"
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"
import { NextPage, PreviousPage, SetBackground } from "../../Store/slices"
import "./BookPage.css"
import { useState, useEffect } from "react"

const BookPageRight: React.FC = () => {
  const [isShowChapter, setIsShowChapter] = useState<boolean>(false)
  const [isShowPart, setIsShowPart] = useState<boolean>(false)
  const state = useAppSelector(state => state.LoreOne)
  const dispatch = useAppDispatch()
  const curPage = LoreOneArr[state.curPageRightID]
  const HandleBack = () => {
    dispatch(NextPage())
    dispatch(SetBackground(curPage.BackgroundID))
  }
  useEffect(() => {
    setIsShowChapter(curPage.Chapter !== "")
    setIsShowPart(curPage.Part !== "")
  }, [curPage.Chapter, curPage.Part])

  return (
    <div className={curPage.Style}>
      <div className="PageContent">
        {isShowChapter && <div className="PageChapter">{curPage.Chapter}</div>}
        {isShowPart && <div className="PagePart">{curPage.Part}</div>}
          <img className="PageImage" src={curPage.Image}  alt="Page" />
          <div className="PageText"> {curPage.text}</div>
          <button onClick={HandleBack} className="PageButton">
            &#8592;
          </button>
        </div>
      </div>
  );
}

export default BookPageRight
