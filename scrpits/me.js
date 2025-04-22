document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        image: button.dataset.image,
        quantity: 1
      };

      // Step 1: Get cart from localStorage or initialize it
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Step 2: Check if the product is already in the cart
      const existingItem = cart.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push(product);
      }

      // Step 3: Save the updated cart
      localStorage.setItem('cart', JSON.stringify(cart));

      // Optional: Give feedback
      alert(`${product.name} added to cart!`);
    });
  });
});
