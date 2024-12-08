// Redux actions to modify the cart (actions.js)

// Action to add an item to the cart
export const addToCart = (itemId) => ({
  type: 'ADD_TO_CART',
  payload: itemId, // Item ID to add to the cart
});

// Action to remove an item from the cart
export const removeFromCart = (itemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId, // Item ID to remove from the cart
});

// Action to set the initial cart state (e.g., from localStorage)
export const setCart = (cartItems) => ({
  type: 'SET_CART',
  payload: cartItems, // Set the cart to the provided array of items
});
