import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

// Luana Moneró, Helena Greco e Lucas Pine
export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const fetchResult = await getCategories();
    this.setState({
      loading: false,
      categories: fetchResult,
    });
  }

  render() {
    const { categories, loading } = this.state;
    if (loading) { return 'Carregando...'; }

    return (
      <>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <sidebar>
          <ul>
            { categories.map((category) => (
              <li key={ category.id } data-testid="category">{ category.name }</li>
            ))}
          </ul>
        </sidebar>
      </>
    );
  }
}
