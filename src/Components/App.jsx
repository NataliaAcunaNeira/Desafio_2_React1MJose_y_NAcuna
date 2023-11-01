import { useState } from 'react' 
import Header from './Header';
import MyCard from './MyCard';
import Footer from './Footer';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="Adopta un perrito" />
      <section className="cardGeneral">
      <MyCard src="../img/pexels-dominika-roseclay-1139794.jpg" name="Pepito" description="Tiene 1 año. Busca un hogar lleno de mucho amor" tag="Nueva publicación"></MyCard>
      <MyCard src="../img/pexels-hoy-1390784.jpg" name="Tostado" description="Es de raza pequeña, es muy sociable y cariñoso" tag="¿Lo dejarás pasar?"></MyCard>
      <MyCard src="../img/pexels-nataliya-vaitkevich-5122188.jpg" name="León" description="Es un perrito muy sociable con niños, gatos y otros perros" tag="Novedad del día"></MyCard>
      <MyCard src="../img/pexels-julissa-helmuth-3196887.jpg" name="Shopper" description="Es dinámico y enérgico. No le gustan los gatos" tag="Te guiño"></MyCard>
      </section>
      
      <Footer footer="Dales una nueva oportunidad de ser amados"></Footer>
      
      
    </>
  )
}

export default App
