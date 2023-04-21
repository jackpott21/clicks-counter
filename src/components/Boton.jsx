import React from "react";
import '../styles/Boton.css'


function Boton( {text , clickBoton , manejarClick} ) {
    return(
        <button  className={ clickBoton ? 'boton-click' : 'boton-reiniciar' }
        onClick={manejarClick}>
            {text}
        </button>
    )
    
}


export default Boton;