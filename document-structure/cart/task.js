const products = Array.from(document.querySelectorAll('.product__quantity-controls'));

const productList = Array.from(document.querySelectorAll('.product'));

const cartProducts = document.querySelector('.cart__products');


products.forEach((product) => {
  let productCount = Array.from(product.children);
  let decline = productCount[0];
  let amount = productCount[1];
  let incline = productCount[2];

  let addProduct = product.nextElementSibling;

  incline.onclick = function () {++amount.textContent}
  decline.onclick = function () {
    amount.textContent > 1 ? --amount.textContent : amount.textContent;
  }
  
  addProduct.onclick = function () {

    selectedProduct = addProduct.closest('.product');
    let productId = selectedProduct.getAttribute('data-id');
    currentCart = Array.from(cartProducts.children);

    let cartAmount = Array.from(products[productId - 1].children)[1].textContent;

    if (!currentCart.map((el) => el.getAttribute('data-id')).some((el) => el === productId)) {
      let cartProduct = document.createElement('div');
      cartProducts.appendChild(cartProduct);

      cartProduct.outerHTML = `<div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${selectedProduct.children[1].getAttribute('src')}">
        <div class="cart__product-count">${cartAmount}</div>
        </div>`
    } else {
      let existingProduct = currentCart[productId - 1];

      existingProduct.lastElementChild.textContent = Number(existingProduct.lastElementChild.textContent) + Number(cartAmount);
    }
  }
})

