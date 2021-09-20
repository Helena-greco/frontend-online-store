import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

// Luana Moneró, Helena Greco e Lucas Pine
export default class Home extends Component {
  constructor() {
    super();

    this.onChangeText = this.onChangeText.bind(this);
    this.onClickGetProducts = this.onClickGetProducts.bind(this);

    this.state = {
      loading: true,
      categories: [],
      inputText: '',
      resultApiSearch: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  onChangeText(event) {
    this.setState({
      inputText: event.target.value,
    });
  }

  async onClickGetProducts() {
    const { inputText } = this.state;
    const getApi = await getProductsFromCategoryAndQuery('', inputText);
    const resultsFromApi = getApi.results;
    this.setState({
      resultApiSearch: resultsFromApi,
    });
  }

  fetchCategories = async () => {
    const fetchResult = await getCategories();
    this.setState({
      loading: false,
      categories: fetchResult,
    });
  }

  render() {
    const { categories, loading, inputText, resultApiSearch } = this.state;

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
                value={ inputText }
                onChange={ this.onChangeText }
              />
              <button
                id="button-search-products"
                type="button"
                data-testid="query-button"
                onClick={ this.onClickGetProducts }
              >
                Pesquisar
              </button>
            </div>
            <section>
              { loading ? 'Carregando' : resultApiSearch.map((element) => (
                <div
                  className="li-product-item"
                  key={ element.id }
                  data-testid="product"
                >
                  <img
                    src={ element.thumbnail }
                    alt={ element.id }
                  />
                  <p>
                    {' '}
                    R$
                    { element.price }
                  </p>
                </div>
              )) }
            </section>
          </section>
        </main>
      </>
    );
  }
}
