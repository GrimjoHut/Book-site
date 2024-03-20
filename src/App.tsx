import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import StartNavPage from "./Pages/StartNavPage/StartNavPage"
import LoreOne from "./Pages/Lore/LoreOne/LoreOne"
import Bestiary from "./Pages/Bestiary/Bestiary"

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="pageContainer">
          {" "}
          {/* Обертка для компонентов */}
          <Routes>
            <Route path="/Lore" />
            <Route path ="/Lore/LoreOne" element={<LoreOne />}></Route>
            <Route path="/Bestiary" element={<Bestiary />}/>
            <Route path="/Map"  />
            <Route path="/Pantheon" />
            <Route path="/StartNavPage" element={<StartNavPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
