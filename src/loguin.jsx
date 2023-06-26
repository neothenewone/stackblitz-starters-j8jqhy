import { useState } from 'react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react-hook';
import './loguin_styles.css';
import Second from './secondStep';
function Loguin(datosHeredados) {
  
  const parametro=datosHeredados.objet;
  console.log(parametro)
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
      {carga1 && <Second {...datos} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="datos-personales">
          <h3 className="encabezados">Ingrese su DNI y correo Electrónico</h3>
          <hr />
          {errors.dni?.type === 'required' && (
            <span className="aviso">Es un campo requerido!!!</span>
          )}
          {errors.dni?.type === 'pattern' && (
            <span className="aviso">
              Formato invalido solo numeros sin . ni -{' '}
            </span>
          )}
          {errors.dni?.type === 'maxLength' && (
            <span className="aviso">Formato invalido solo 8 numeros </span>
          )}
          {errors.dni?.type === 'minLength' && (
            <span className="aviso">Formato invalido solo 8 numeros </span>
          )}
          <input
            type="text"
            placeholder="DNI"
            className="campos"
            {...register('dni', {
              required: true,
              pattern: /^-?\d+(?:,\d+)?(?:[Ee][-+]?\d+)?$/i,
              maxLength: 8,
              minLength: 8,
            })}
          />

          <div className="Loguin-Form-Open">
            {errors.email?.type === 'required' && (
              <span className="aviso">Es un campo requerido!!!</span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className="aviso">
                Debe tener una direccion de correo valida!!!
              </span>
            )}
            <input
              className="campos"
              type="text"
              placeholder="Email"
              {...register('email', {
                required: true,
                pattern:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              })}
            />
          </div>
        </section>
        <div className="contenedor-boton">
          <input type="submit" value="Ingresar" className="botonEnviar" />
        </div>
      </form>

      <footer>
        <div className="corp">
          <p>DTyD 2023 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
    </div>
  );
}
export default Loguin;
