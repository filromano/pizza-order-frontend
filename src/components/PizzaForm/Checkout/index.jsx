import './Checkout.scss';

import React from 'react';

export default (props) => {
  return(
    <div className="Checkout">
      <h2>Obrigado por nos escolher</h2>
      <button onClick={props.sendOrder}>Finalizar pedido</button>
      <button onClick={props.refresh}>Recomeçar pedido</button>
    </div>
  );
};
