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
    <Header title="my first react app" color="red"/>
    {/* <Header color="red"/>   */}

    <card>
      <h4> this is children demo</h4>
      <p>this demo talks about passing children prop</p>
    </card>
    <Registration/>
    <h2>vg</h2>
    <Footer year={y} company={c}/>
   </>
  )
}
export default App
