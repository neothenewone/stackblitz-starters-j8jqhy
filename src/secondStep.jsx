import * as React from 'react';
import './loguin_styles.css';
import Formulario from './Formulario';
import Modal from './Modal';
import { useModal } from '../useModal';
function Second(datos) {
  const [isOpenModal1, openModal1, closeModal1] = useModal(
    datos.apellido != ''
  );
  const [isOpenEditar, openEditar, closeEditar] = useModal(
    datos.apellido == ''
  );

  return (
    <div>
      {isOpenModal1 && (
        <>
          <Formulario {...datos} />
          {console.log('Estoy caca de Second en nuevo usuario' + datos)}{' '}
        </>
      )}
      {isOpenEditar && (
        <>
          <Formulario {...datos} />
          {console.log('Estoy dentreo de usuario' + datos)}{' '}
        </>
      )}
    </div>
  );
}
export default Second;

/*{isOpenEditar && <Modal isOpen={isOpenModal1}closeModal={closeModal1}>
<h3>Usted se encuentra reguistrado!</h3>
<h4>Nro de Registro</h4>
<button onClick={closeModal1}>Aceptar</button>
<button onClick={openEditar}>Editar</button>
</Modal> 
}
<Modal isOpen={isOpenEditar} closeModal={closeEditar}>
<h3>editar</h3>
<Formulario {...datos.objet}/>

</Modal>*/
