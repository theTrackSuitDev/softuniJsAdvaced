function solve() {
   let productsList = [];
   let pricesArray = [];

   let shoppingCartElement = document.querySelector('.shopping-cart');
   shoppingCartElement.addEventListener('click', onClickHandler);

   let textAreaElement = document.querySelector('textarea');
   textAreaElement.value = null;

   function onClickHandler(event) {
      if (event.target.classList.contains('add-product')) {
         let productName = event.target.parentNode.parentNode.querySelector('.product-title').textContent;
         let price = event.target.parentNode.parentNode.querySelector('.product-line-price').textContent;
         price = Number(price);

         if (!productsList.includes(productName)) {
            productsList.push(productName);
         }

         pricesArray.push(price.toFixed(2));
         textAreaElement.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`
      }

      if (event.target.classList.contains('checkout')) {
         let allButtons = Array.from(event.currentTarget.querySelectorAll('button'));

         allButtons.forEach(button => {
            button.setAttribute("disabled", "");
         });

         pricesArray = pricesArray.map(Number);
         let totalPrice = pricesArray.reduce((a, b) => a + b, 0);

         textAreaElement.value += `You bought ${productsList.join(', ')} for ${totalPrice.toFixed(2)}.`
      }
   }
}

// Not passing 2 tests for unknown reasons:

// function solve() {
//    let productsList = [];
//    let totalPrice = 0;
//    let textAreaElement = document.querySelector('textarea');
//    textAreaElement.value = null;

//    let addButtonElements = Array.from(document.querySelectorAll('.add-product'));
//    addButtonElements.forEach(button => {
//       button.addEventListener('click', addFunction)
//    });
   
//    function addFunction(event) {
//       // let productElement = event.target.closest('.product');
//       let productElement = event.target.parentElement.parentElement;
//       let productName = productElement.querySelector('.product-title').textContent;
//       let price = productElement.querySelector('.product-line-price').textContent;
//       price = Number(price);
//       if (!productsList.includes(productName)) {
//          productsList.push(productName);
//       }

//       totalPrice += price;
//       textAreaElement.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`
//    }

//    let checkoutElement = document.querySelector('.checkout');
//    checkoutElement.addEventListener('click', checkoutFunction);

//    function checkoutFunction(event) {
//       let allButtons = Array.from(document.querySelectorAll('button'));
//       allButtons.forEach(button => {
//          button.setAttribute("disabled", "");
//       });
//       if (productsList.length > 0) {
//          textAreaElement.value += `You bought ${productsList.join(', ')} for ${totalPrice.toFixed(2)}.`
//       }
//    }
// }