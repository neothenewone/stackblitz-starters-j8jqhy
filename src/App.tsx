import * as React from 'react';
import Loguin from './loguin';
import Formulario from './Formulario'

export default function App() {
  const datos={dni:"30548471",
  email:"neotheoldone@gmail.com",
  cuil:"20305484718",
  nombre:"seba",
  apellido:"Pereyra",
  fechaNacimiento:"1999-01-01",telefono:"3413361678",direccion:"Querandies 852"}
  //objet={datos}
  
  return (
    <div className="App">
      <Formulario objet={datos}/>
      
      
    </div>
  );
}
