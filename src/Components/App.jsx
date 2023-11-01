import { useState } from 'react' 
import Registro from './Registro';
import Formulario from './Formulario';
import Alert from './Alert';
import SocialButton from './SocialButton';
import Header from './Header';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header title="Crea una cuenta" />
      <Formulario />
      
      
    </>
  )
}

export default App
