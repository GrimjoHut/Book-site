import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import BookLoreOne from "./BookLoreOne/BookLoreOne"
import { BackgroundShowChange } from "./Store/slices"
import { useState, useEffect } from "react"
import "./LoreOne.css"

const LoreOne: React.FC = () => {
  const [buttonText, setButtonText] = useState<string>("Show") // Используем useState для кнопки

  const state = useAppSelector(state => state.LoreOne)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setButtonText(state.isShowBook ? "Show" : "Hide")
  }, [state.isShowBook])

  const handleBackChange = () => {
    dispatch(BackgroundShowChange())
  }

  return (
    <body className="LoreOneBody">
      <div className={state.isShowBook? "effects" : "noEffects"}></div>
      <img className="BackImg" src="https://i.pinimg.com/originals/f7/83/41/f7834110336ed7fb68f8f0d7327b34cc.jpg"></img>
      <div className={state.isShowBook ? "Book" : "HiddenBook"}>
        <BookLoreOne />
      </div>
      <button onClick={handleBackChange} className="BackButton rounded-button">
        <span className="left-semicircle"></span>
        <span className="button-content">{buttonText}</span>
        <span className="right-semicircle"></span>
      </button>
    </body>
  )
}

export default LoreOne
