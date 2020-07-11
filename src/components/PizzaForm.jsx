import React, { Component } from 'react';
import axios from 'axios';

import ListItems from './ListItems';
import Flavors from './Flavors'

const URL = 'http://localhost:3003/api';

class PizzaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      pizzas: {
        sizes: [],
        crusts: [],
        flavors: [],
      },
      selection: {
        total: 0
      },
    }
  }

  componentDidMount() {
    axios.get(`${URL}/pizzas`).then(
      resp => {
        this.setState({pizzas: resp.data});
    });
  }

  render() {

    let choose;

    if(this.state.step === 0) {
      choose = <ListItems name="crust"
                          title="Selecione uma massa"
                          items={this.state.pizzas.crusts}/>
    } else if(this.state.step === 1) {
      choose = <ListItems name="size"
                          title="Selecione um tamanho"
                          items={this.state.pizzas.sizes}/>
    } else if(this.state.step === 2) {
      choose = <Flavors flavors={this.state.pizzas.flavors}/>
    };

    return (
      <div>
        <h2>Faça seu pedido</h2>
        {choose}
        <p>Total a ser pago: {this.state.selection.total}</p>
      </div>
    );
  }
};

export default PizzaForm;
