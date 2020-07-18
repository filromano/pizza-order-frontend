import './DisplayOrder.scss';

import React from 'react';

export default (props) => {

  let flavor2Item;

  const { crust, size, flavor1, price1, total, flavor2, price2 } = props.order;

  if(flavor2) {
    flavor2Item = 
    <div>
        <p>Sabor 2: {flavor2}</p>
        <p>Preço: R${price2.toFixed(2).replace('.', ',')}</p>
    </div>
  }

  return (
    <div className="DisplayOrder">
      <h3>Suas escolhas: (pizza atual)</h3>
      <p>Massa: {crust}</p>
      <p>Tamanho: {size}</p>
      <p>Sabor 1: {flavor1}</p>
      <p>Preço: R${price1.toFixed(2).replace('.', ',')}</p>
      {flavor2Item}
      <p>Total: R${total.toFixed(2).replace('.', ',')}</p>
    </div>
  )
};
