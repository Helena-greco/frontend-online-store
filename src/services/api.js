/* import categories from '../__mocks__/categories'; */

export async function getCategories() {
  const fetchResult = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await fetchResult.json();
  return categories;
}
console.log(getCategories());

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchGetProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query} `);
  const products = await fetchGetProducts.json();
  return products;
}
