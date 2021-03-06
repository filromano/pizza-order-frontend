import './PizzaForm.scss';

import React, { Component } from 'react';

import Crust from './Crust/';
import Size from './Size/';
import Flavors from './Flavors/';
import DisplayOrder from './DisplayOrder/';
import HalfFlavor from './HalfFlavor/';
import Checkout from './Checkout/';

import { getPizzas, sendOrder } from './serverConnection';

class PizzaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      pizzas: {
        sizes: [],
        crusts: [],
        flavors: [],
        pizzaDia: '',
      },
      order: {
        crust: '',
        size: '',
        flavor1: '',
        flavor2: '',
        price1: 0,
        price2: 0,
        total: 0,
      }
    }
  }

  componentDidMount() {
    getPizzas()
      .then(resp => this.setState({pizzas: resp}))
      .catch(err => alert(err));
  }

  selectCrust = (value) => {
    this.setState(state => ({
      order: {
        ...state.order,
        crust: value
      }
    }))
  }

  selectSize = (value) => {
    this.setState(state => ({
      order: {
        ...state.order,
        size: value
      }
    }))
  }

  changeFlavor = (flavor, position) => {
    this.updatePrice(flavor, position);
    if(position === 1) {
      this.setState(state => ({
        order: {
          ...state.order,
          flavor1: flavor
        }
      }))
    } else {
      this.setState(state => ({
        order: {
          ...state.order,
          flavor2: flavor
        }
      }))
    }
    
  }

  updatePrice = (value, position) => {
    const price = this.state.pizzas.flavors.filter(flavor => flavor.name === value)[0].price;
    if(position === 1){
      this.setState(state => ({
        order: {
          ...state.order,
          price1: price
        }
      }))
    } else {
      this.setState(state => ({
        order: {
          ...state.order,
          price2: price
        }
      }))
    }
  }

  calculateTotal = () => {
    const total = this.state.order.price1 < this.state.order.price2 ? this.state.order.price2 : this.state.order.price1;
    this.setState(state => ({
      order: {
        ...state.order,
        total: total
      }
    }))
  }

  nextStep = (value) => {
    if(!isNaN(value)) {
      this.setState({step: value});
    } else {
      const actualStep = this.state.step;
      const nextStep = actualStep + 1;
      this.setState({step: nextStep});
    }
  }

  sendOrder = () => {
    sendOrder(this.state.order)
      .then(resp=> {
        alert(resp);
        this.refresh();
      })
      .catch(err => alert(err));
  }

  refresh = () => {
    window.location.reload(false);
  }

  render() {

    let choose;

    if(this.state.step === 1) {
      choose = <Crust updateValue={this.selectCrust}
                      crusts={this.state.pizzas.crusts}
                      nextStep={this.nextStep}/>
    } else if(this.state.step === 2) {
      choose = <Size updateValue={this.selectSize}
                     sizes={this.state.pizzas.sizes}
                     nextStep={this.nextStep}/>
    } else if(this.state.step === 3) {
      choose = <Flavors flavors={this.state.pizzas.flavors}
                        pizzaDia={this.state.pizzas.pizzaDia}
                        changeFlavor={this.changeFlavor}
                        position={1}
                        nextStep={this.nextStep}
                        calculateTotal={this.calculateTotal}/>
    } else if(this.state.step === 4) {
      choose = <HalfFlavor nextStep={this.nextStep}/>
    } else if(this.state.step === 5) {
      choose = <Flavors flavors={this.state.pizzas.flavors}
                        pizzaDia={this.state.pizzas.pizzaDia}
                        changeFlavor={this.changeFlavor}
                        position={2}
                        nextStep={this.nextStep}
                        calculateTotal={this.calculateTotal}/>
    } else if(this.state.step === 6) {
      choose = <Checkout sendOrder={this.sendOrder}
                         refresh={this.refresh}/>
    }

    return (
      <div className="PizzaForm">
        {choose}
        <DisplayOrder order={this.state.order}/>
      </div>
    );
  }
};

export default PizzaForm;
