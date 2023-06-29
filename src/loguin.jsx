import { useState } from 'react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react-hook';
import './loguin_styles.css';
import Second from './secondStep';
function Loguin(datosHeredados) {
  const parametro = datosHeredados.objet;
  console.log(parametro);
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});

  const [carga1, setCarga1] = useState(false);
  const [datos, setDatos] = useState();
  const onSubmit = (data) => {
    if (parametro.dni != data.dni) {
      alert('entre porque los dni no coiciden');

      console.log(data);
      setDatos(data);
      console.log(datos);
      setCarga1(true);
    } else {
      alert('entre los dni ');

      setDatos(parametro);

      console.log(datos);
      setCarga1(true);
    }
  };
  return (
    <div>
     
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
         <h2 className="form__title"> Inicia Sesion</h2>
         <p className="form__paragraph">Aun no tienes cuenta <a href="#" className="fomr__link">Entra Aqui </a></p>
         <div className="form_container">
           <div className="form__group">
             <input type="text" id="user" className="form__input" placeholder=" "/>
             <label for="user" className="form__label">Nombre:</label>
             <span className="form__line"></span>
           </div>
           <div className="form__group">
             <input type="text" id="name" className="form__input" placeholder=" "/>
             <label for="name" className="form__label">Nombre:</label>
             <span className="form__line"></span>
           </div>
           <input type="submit" className="form__submit" value="Entrar"/>
         </div>
        </form>
    </div>
  );
}
export default Loguin;
