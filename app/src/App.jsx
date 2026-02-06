// javascript framework
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Registration from './components/Registration.jsx'

function App() {
  let y=[2024,2025,2026];
  const c={name: "KIET",location: "Ghaziabad",EST_year: 1998}
  return (
   <>
    <Header title="my first react app"/>    
    <Registration/>
    <h2>vg</h2>
    <Footer year={y} company={c.name}/>
   </>
  )
}
export default App
