import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logoTitle from './images/clicks-counter.png'
import { useState } from 'react';



function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo-img' 
        src={logoTitle}
        alt='clicksLogo'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton 
        text='Click'
        clickBoton={true}
        manejarClick={manejarClick}/>
        <Boton 
        text='Reiniciar'
        clickBoton={false}
        manejarClick={reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
