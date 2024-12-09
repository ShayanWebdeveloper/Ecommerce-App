
export const addToCart = (itemId) => ({
  type: 'ADD_TO_CART',
  payload: itemId,
});

export const removeFromCart = (itemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId, 
});


export const setCart = (cartItems) => ({
  type: 'SET_CART',
  payload: cartItems, 
});




