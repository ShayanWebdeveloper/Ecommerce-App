export const get_All_item = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []; 
    return cartItems;
  };
  

  export const add_to_Cart = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));  
  };