// import styles from "./StartNavigationPage.module.css"
import { useState } from "react"
import StartNavigationModalWindow from "./Components/StartNavigationModalWindow/StartNavigationModalWindow"
import BesNavWindow from "./Components/BestiaryNavigationWindow/BestiaryNavigationWindow"
import MapNavWindow from "./Components/MapNavigationWindow/MapNavigationWidnow"
import PantheonNavWindow from "./Components/PantheonNavigationWindow/PantheonNavigationWidnow"
import LoreNavWindow from "./Components/LoreNavigationWindow/LoreNavigationWidnow"
import BookNavWindow from "./Components/BookNavigationWindow/BookNavigationWidnow"

const StartNavigationPage: React.FC = () => {
  const [curNavMockID, setCurNavMockID] = useState<number>(1)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  return (
    <>
      <StartNavigationModalWindow
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        curNavMockID={curNavMockID}
      />
      <BesNavWindow
        setIsShowModal={setIsShowModal}
        setCurNavMockID={setCurNavMockID}
      />
      <MapNavWindow
        setIsShowModal={setIsShowModal}
        setCurNavMockID={setCurNavMockID}
      />
      <PantheonNavWindow
        setIsShowModal={setIsShowModal}
        setCurNavMockID={setCurNavMockID}
      />
      <LoreNavWindow
        setIsShowModal={setIsShowModal}
        setCurNavMockID={setCurNavMockID}
      />
      <BookNavWindow
        setIsShowModal={setIsShowModal}
        setCurNavMockID={setCurNavMockID}
      />
    </>
  )
}

export default StartNavigationPage
