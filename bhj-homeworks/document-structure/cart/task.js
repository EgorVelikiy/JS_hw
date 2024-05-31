let products = document.querySelectorAll('.product')
let imgs = document.querySelectorAll('.product__image')
let append = document.querySelectorAll('.product__add')
let cart = document.querySelector('.cart__products')

let incr = document.querySelectorAll('.product__quantity-control_inc')
let decr = document.querySelectorAll('.product__quantity-control_dec')
let quantity = document.querySelectorAll('.product__quantity-value')
let array = []

incr.forEach((inc, index) => {
  inc.onclick = () => {
    let counter = Number(quantity[index].textContent);
    quantity[index].textContent = counter + 1;
  }
})

decr.forEach((dec, index) => {
  dec.onclick = () => {
    let counter = Number(quantity[index].textContent);
    quantity[index].textContent = counter - 1;
    if (counter == 1) {
      quantity[index].textContent = 1;
    }
  }
})

append.forEach((add, index) => {
  add.onclick = () => {
    let carts = document.querySelectorAll('.cart__product')
    const array = Array.from(carts)
    const productInCard = array.find(prod => prod.getAttribute('data-id') == products[index].getAttribute('data-id'));
    if (productInCard) {
      productInCard.children[1].textContent = Number(productInCard.children[1].textContent) + Number(quantity[index].textContent);
    } else {
      cart.insertAdjacentHTML('beforeend', `
      <div class="cart__product" data-id="${products[index].getAttribute('data-id')}">
        <img class="cart__product-image" src="${imgs[index].getAttribute('src')}">
        <div class="cart__product-count">${quantity[index].textContent}</div>
      </div>`);
    }
  }
})