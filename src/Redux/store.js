
import { createStore } from 'redux';


const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCartAdd = [...state, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCartAdd));  // Sync to localStorage
      return updatedCartAdd;

    case 'REMOVE_FROM_CART':
      const updatedCartRemove = state.filter(item => item !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCartRemove));  // Sync to localStorage
      return updatedCartRemove;

    case 'SET_CART':
      return action.payload; // Set initial cart state from localStorage or default
    default:
      return state;
  }
};

// Create Redux store with the cartReducer
const store = createStore(cartReducer);

export default store;
