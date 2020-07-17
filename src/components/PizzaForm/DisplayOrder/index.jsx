import './DisplayOrder.scss';

import React from 'react';

export default (props) => {

  let flavor2;

  if(props.order.flavor2) {
    flavor2 = 
    <div>
        <p>Sabor 2: {props.order.flavor2}</p>
        <p>Preço: R${props.order.price2.toFixed(2).replace('.', ',')}</p>
    </div>
  }

  return (
    <div className="DisplayOrder">
      <h3>Suas escolhas: (pizza atual)</h3>
      <p>Massa: {props.order.crust}</p>
      <p>Tamanho: {props.order.size}</p>
      <p>Sabor 1: {props.order.flavor1}</p>
      <p>Preço: R${props.order.price1.toFixed(2).replace('.', ',')}</p>
      {flavor2}
      <p>Total: R${props.order.total.toFixed(2).replace('.', ',')}</p>
    </div>
  )
};
