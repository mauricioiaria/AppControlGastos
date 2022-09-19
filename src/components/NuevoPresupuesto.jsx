import { useState } from 'react';

import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
  presupuesto,
  SetPresupuesto,
  setIsValidPresupuesto,
}) => {
  //* STATE para msj de validacion

  const [mensaje, setMensaje] = useState('');

  //! Validacion Formulario
  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje('No es un presupuesto Valido');
      return;
    }
    setMensaje('');
    setIsValidPresupuesto(true);
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
          <label>Definir Presupuesto</label>
          <input
            className='nuevo-presupuesto'
            type='Number'
            placeholder='Añade tu presupuesto'
            value={presupuesto}
            onChange={(e) => SetPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type='submit' value='Añadir' />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
