import Coffees from "./Coffees"
import Pastries from "./Pastries"
import Teas from "./Teas"
import './MenuStyles.css'

function App() {

  return (
    <div className="menu-board">
      <Coffees />
      <Teas />
      <Pastries />
    </div>
  )
}

export default App
