import '../../style/PizzaForm.css';

import React, { Component } from 'react';
import axios from 'axios';

import Crust from './Crust';
import Size from './Size';
import Flavors from './Flavors';
import DisplayOrder from './DisplayOrder';
import HalfFlavor from './HalfFlavor';
import Checkout from './Checkout';

const URL = 'http://localhost:3003/api';

class PizzaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      pizzas: {
        sizes: [],
        crusts: [],
        flavors: [],
      },
      order: {
        crust: '',
        size: '',
        flavor1: '',
        flavor2: '',
        price: 0,
        half: false,
      }
    }
  }

  componentDidMount() {
    axios.get(`${URL}/pizzas`).then(
      resp => {
        this.setState({pizzas: resp.data});
    });
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

  changeFlavor = (flavor) => {
    this.updatePrice(flavor);
    this.setState(state => ({
      order: {
        ...state.order,
        flavor1: flavor
      }
    }))
  }

  updatePrice = (value) => {
    const flavorInfo = this.state.pizzas.flavors.filter(flavor => flavor.name === value)[0];
    this.setState(state => ({
      order: {
        ...state.order,
        total: flavorInfo.price
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
    } else if(this.state.step === 3 || this.state.step === 5) {
      choose = <Flavors flavors={this.state.pizzas.flavors}
                        changeFlavor={this.changeFlavor}
                        nextStep={this.nextStep}/>
    } else if(this.state.step === 4) {
      choose = <HalfFlavor nextStep={this.nextStep}/>
    } else if(this.state.step === 6) {
      choose = <Checkout />
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
