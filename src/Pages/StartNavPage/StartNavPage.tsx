// import styles from "./StartNavigationPage.module.css"
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

export default StartNavPage
