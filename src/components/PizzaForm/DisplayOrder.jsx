import '../../style/DisplayOrder.css';

import React from 'react';

export default (props) => {
  return (
    <div className="DisplayOrder">
      <h3>Suas escolhas: (pizza atual)</h3>
      <p>Massa: {props.order.crust}</p>
      <p>Tamanho: {props.order.size}</p>
      <p>Sabor: {props.order.flavor1}</p>
      <p>Preço: {props.order.price1}</p>
      <p>Sabor: {props.order.flavor2}</p>
      <p>Preço: {props.order.price2}</p>
      <p>Total: {props.order.total}</p>
    </div>
  )
};