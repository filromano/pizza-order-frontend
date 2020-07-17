import './HalfFlavor.scss';

import React from 'react';

export default (props) => {
  return (
    <div className="HalfFlavor">
      <h4>Deseja escolher mais um sabor para fazer meio a meio?</h4>
      <button onClick={e => props.nextStep(5)}>Sim</button>
      <button onClick={e => props.nextStep(6)}>Não</button>
    </div>
  );
};
