import React from 'react';

export default (props) => {

  const items = props.items.map((item, index) => 
    <option value={item} key={index}>{item}</option>
  );

  return (
    <div>
      <h3>{props.title}</h3>
      <select name={props.name} id="">
        <option value="">Escolha uma</option>
        {items}
      </select>
    </div>
  )
};
