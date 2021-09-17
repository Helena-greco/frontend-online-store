import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      isEmpty: true,
    };
  }

  render() {
    const { isEmpty } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          { isEmpty ? 'Seu carrinho está vazio' : '' }
        </p>
      </div>
    );
  }
}
