export const verify = (item, action) => {
  if(item.value !== '') {
    action();
  } else {
    alert('Você precisa escolher uma opção'); 
  }
}

export const verifyRadioButton = (item, actions) => {
  const rbs = item;
  let selectedValue;
  for (const rb of rbs) {
      if (rb.checked) {
          selectedValue = rb.value;
          break;
      }
  }
  if(selectedValue !== undefined){
    actions.forEach(element => {
      element();
    });
  } else {
    alert('Você precisa escolher um sabor');
  }
}