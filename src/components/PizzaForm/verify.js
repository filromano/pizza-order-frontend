export const verify = (item, action) => {
  if(item.value !== '') {
    action();
  } else {
    alert('Você precisa escolher uma opção'); 
  }
}