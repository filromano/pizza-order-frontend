import axios from 'axios';

const URL = 'http://localhost:3003/api';
const serverErrorMessage = 'Desculpe estamos com um problema no servidor';

export const getPizzas = () => {
  return new Promise ((resolve, reject) => {
    axios.get(`${URL}/pizzas`)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err=>{
        reject(serverErrorMessage)
      });
  });
};

export const sendOrder = (order) => {
  return new Promise((resolve, reject) => {
    axios.post(`${URL}/order`, {order})
    .then(res => {
      resolve(`Pedido realizado com sucesso, ${res.data.points} pontos foram adicionados a sua conta.`);
    })
    .catch( err => {
      reject(serverErrorMessage);
    });
  });
};
