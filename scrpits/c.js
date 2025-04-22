document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.getElementById('cart-container');
  const totalPriceElement = document.getElementById('total-price');
  const checkoutButton = document.querySelector('.checkout-btn');
  const paymentModal = document.getElementById('payment-modal');
  const closePaymentModal = document.querySelector('.close-payment-modal');
  const visaButton = document.getElementById('visa');
  const mastercardButton = document.getElementById('mastercard');

  // Load cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // If cart is empty, show a message
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    checkoutButton.disabled = true; // Disable checkout if the cart is empty
  } else {
    renderCart(); // Render items in cart
    updateTotalPrice(); // Calculate initial total price
  }

  // Function to update the cart in localStorage and display total
  function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateTotalPrice();
  }

  // Render cart items
  function renderCart() {
    cartContainer.innerHTML = ''; // Clear current cart content

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      checkoutButton.disabled = true;
      return;
    }

    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.dataset.id = item.id;

      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
        </div>
        <div class="quantity-controls">
          <button class="decrease-quantity">-</button>
          <span class="quantity">${item.quantity}</span>
          <button class="increase-quantity">+</button>
        </div>
        <button class="remove-item">Remove</button>
      `;

      // Append to the cart container
      cartContainer.appendChild(cartItem);

      // Handle increase quantity
      cartItem.querySelector('.increase-quantity').addEventListener('click', () => {
        item.quantity++;
        updateCart();
        cartItem.querySelector('.quantity').textContent = item.quantity;
      });

      // Handle decrease quantity
      cartItem.querySelector('.decrease-quantity').addEventListener('click', () => {
        if (item.quantity > 1) {
          item.quantity--;
          updateCart();
          cartItem.querySelector('.quantity').textContent = item.quantity;
        }
      });

      // Handle remove item
      cartItem.querySelector('.remove-item').addEventListener('click', () => {
        cart = cart.filter(cartItem => cartItem.id !== item.id);
        updateCart();
        cartItem.remove(); // Remove from the DOM
      });
    });
  }

  // Update total price
  function updateTotalPrice() {
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);
    if (cart.length === 0) {
      totalPriceElement.textContent = '0.00'; // Ensure total is reset to 0 if cart is empty
    }
  }

  // Checkout button functionality
  checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) return;
    paymentModal.style.display = 'flex'; // Show the payment modal
  });

  // Close the payment modal
  closePaymentModal.addEventListener('click', () => {
    paymentModal.style.display = 'none';
  });

  // Handle Visa Payment
  visaButton.addEventListener('click', () => {

    const cardNumber = prompt("Enter your Visa card number (16 digits):");

 if (!cardNumber || cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
   alert("Invalid card number. It must be exactly 16 digits and contain only numbers.");
   return;
 }

    alert('Payment successful with Visa!');
    completeCheckout();
  });

  // Handle MasterCard Payment
  mastercardButton.addEventListener('click', () => {

    const cardNumber = prompt("Enter your MasterCard number (16 digits):");

   if (!cardNumber || cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
     alert("Invalid card number. It must be exactly 16 digits and contain only numbers.");
     return;
   }

    alert('Payment successful with MasterCard!');
    completeCheckout();
  });

  // Complete checkout process
  function completeCheckout() {
    // Clear the cart from localStorage
    localStorage.removeItem('cart');
    cart = [];
    updateCart(); // Update the UI and empty cart
    paymentModal.style.display = 'none'; // Close the modal
    checkoutButton.disabled = true; // Disable checkout if cart is empty
  }

  // Initial render
  renderCart();
});
