
import { createStore } from 'redux';


const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCartAdd = [...state, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCartAdd)); 
      return updatedCartAdd;

    case 'REMOVE_FROM_CART':
      const updatedCartRemove = state.filter(item => item !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCartRemove));  
      return updatedCartRemove;

    case 'SET_CART':
      return action.payload; 
    default:
      return state;
  }
};


const store = createStore(cartReducer);

export default store;
