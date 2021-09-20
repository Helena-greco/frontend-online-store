import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

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

    return (
      <>
        <h1 id="h1-home" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link
          className="bi bi-cart"
          id="cart-link"
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <main className="main-section">
          <aside className="aside-div">
            <ul id="ul-aside-div">
              { loading ? 'Carregando' : categories.map((category) => (
                <li
                  className="li-aside-div"
                  key={ category.id }
                  data-testid="category"
                >
                  { category.name }
                </li>
              )) }
            </ul>
          </aside>
          <section className="products-section">
            <div>
              <input
                id="input-search-products"
                type="text"
                data-testid="query-input"
                placeholder="Pesquise produtos"
              />
              <button
                id="button-search-products"
                type="button"
                data-testid="query-button"
              >
                Pesquisar
              </button>
            </div>
            <ul>
              {/* { loading ? 'Carregando' : getProductsFromCategoryAndQuery.map((element) => (
                <li
                  className="li-aside-div"
                  key={ element.id }
                  data-testid="category"
                >
                  { element.name }
                </li>
              )) } */}
            </ul>
          </section>
        </main>
      </>
    );
  }
}
