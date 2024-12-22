import Coffees from "./components/Coffees"
import Pastries from "./components/Pastries"
import Teas from "./components/Teas"
import './MenuStyles.css'
import { useState } from "react"

const App = () => {
  const [showCoffees, setShowCoffees] = useState(true);
  const [showTeas, setShowTeas] = useState(true);
  const [showPastries, setShowPastries] = useState(true);
  const coffees = useState(["Espresso ", "Cappuccino ", "Latte "]);
  const teas = useState(["Green Tea ", "Chamomille Tea ", "Earl Grey Tea "]);
  const pastries = useState(["Croissant ", "Blueberry Muffin ", "Cinnamon Roll "]);

  return (
    <div className="menu-board">
      <h1>Java Joy Menu</h1>
      {showCoffees && <Coffees items={coffees} />}
      {showTeas && <Teas items={teas} />}
      {showPastries && <Pastries items={pastries} />}
    </div>
  )
}

export default App
