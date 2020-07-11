import '../style/Checkout.css';

import React from 'react';

export default (props) => {
  return(
    <div className="Checkout">
      <h2>Obrigado por nos escolher</h2>
      <button>Adicionar uma pizza</button>
      <button>Finalizar pedido</button>
      <button>Recomeçar pedido</button>
    </div>
  );
};
