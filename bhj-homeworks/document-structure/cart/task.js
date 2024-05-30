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
    if (counter == 0) {
      quantity[index].textContent = 0;
    }
  }
})

append.forEach((add, index) => {
  add.onclick = () => {
    let cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.setAttribute('data-id', products[index].getAttribute('data-id'))
    
    let img = document.createElement('img');
    img.classList.add('cart__product-image');
    img.setAttribute('src', imgs[index].getAttribute('src'));
    
    let count = document.createElement('div');
    count.classList.add('cart__product-count');
    count.innerHTML = `${quantity[index].textContent}`
    
    cartProduct.appendChild(img);
    cartProduct.appendChild(count);
    
    let carts = document.querySelectorAll('.cart__product')
    if (carts.length == 0) {
      array.push(cartProduct.getAttribute('data-id'))
      cart.appendChild(cartProduct);
    }
    carts.forEach((prod) => {
      if (array.includes(`${cartProduct.getAttribute('data-id')}`)) {
        if(prod.getAttribute('data-id') == cartProduct.getAttribute('data-id')) {
          prod.children[1].textContent = Number(prod.children[1].textContent) + Number(count.textContent);
        }
      } else {
        array.push(cartProduct.getAttribute('data-id'))
        cart.appendChild(cartProduct);      
      }
    })
  }
})