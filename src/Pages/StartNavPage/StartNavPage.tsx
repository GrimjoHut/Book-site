import "./StartNavPage.css"
import { useState } from "react"
import StartNavigationModalWindow from "./Components/StartNavModWindow/StartNavModWindow"
import BesNavWindow from "./Components/BesNavWindow/BesNavWindow"
import MapNavWindow from "./Components/MapNavWindow/MapNavWidnow"
import PantheonNavWindow from "./Components/GodNavWindow/GodNavWidnow"
import LoreNavWindow from "./Components/LoreNavWidnow/LoreNavWidnow"
import BookNavWindow from "./Components/BookNavigationWindow/BookNavWindow"

const StartNavPage: React.FC = () => {
  const [curNavMockID, setCurNavMockID] = useState<number>(1)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  return (
    <><StartNavigationModalWindow
    isShowModal={isShowModal}
    setIsShowModal={setIsShowModal}
    curNavMockID={curNavMockID}
  />
    <body className="StartNavBody">
      <div className="BesNavWindow">
      <BesNavWindow
        setIsShowModal={setIsShowModal}
        setCurNavMockID={setCurNavMockID}
      />
      <img src="https://i.pinimg.com/564x/5f/54/f2/5f54f2e1d3671a4e37f3bc094bd9e7fa.jpg"></img>
      </div>
      <div className="MiddleContainer">
      <div className="MapNavWindow">
      <MapNavWindow
        setIsShowModal={setIsShowModal}
        setCurNavMockID={setCurNavMockID}
      />
      </div>
      <div className="PantheonNavWindow">
      <PantheonNavWindow
        setIsShowModal={setIsShowModal}
        setCurNavMockID={setCurNavMockID}
      />
      </div>
      <div className="BookNavWindow">
      <BookNavWindow
        setIsShowModal={setIsShowModal}
        setCurNavMockID={setCurNavMockID}
      />
      </div>
      </div>
      <div className="LoreNavWindow">
      <LoreNavWindow
        setIsShowModal={setIsShowModal}
        setCurNavMockID={setCurNavMockID}
      />
      </div>
    </body>
    </>
  )
}

export default StartNavPage
