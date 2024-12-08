import React, { useState, useEffect } from 'react';
import logo from '../../Assets/logo.svg';
import { Drawer } from 'antd';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/Action';
import Api from '../Api/Api';
import axios from 'axios';
import './Nav.css';
import { useNavigate } from 'react-router';

const Nav = ({ inputValue, handleInputChange }) => {
  const [data, setData] = useState([]);



  const [open, setOpen] = useState(false);


  
  const cartItems = useSelector(state => state);  // Access cart state from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = (e) => {
    handleInputChange(e.target.value);
  };





  const fetchData = () => {
    axios
      .get(Api)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id)); // Dispatch the remove action to Redux
  };

  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach(id => {
      const product = data.find(product => product.id === id);
      if (product) {
        total += product.price;
      }
    });
    return total.toFixed(2);
  };

  const GetCartDetails = () => {
    if (cartItems.length === 0) {
      return <p className="empty-cart">Your cart is empty.</p>;
    }

    return cartItems.map((id, index) => {
      const product = data.find(product => product.id === id);
      if (!product) return null;

      return (
        <div key={index} className="cart-item">
          <div className="cart-item-details">
            <div className="cart-item-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="cart-item-info">
              <h3>{product.title}</h3>
              <p className="cart-item-price">${product.price}</p>
            </div>
            <div className="cart-item-remove">
              <button onClick={() => removeItemFromCart(id)} className="remove-btn">Remove</button>
            </div>
          </div>
        </div>
      );
    });
  };

  const getTotalItems = () => {
    return cartItems.length;
  };

  return (
    <div className="Nav">
      <div className="Logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="link">
        <button onClick={() => navigate("/")}>Home</button>
        <button>About</button>
        <button>Product</button>
        <button>Shop</button>
        <button>Blog</button>
        <button>Contact</button>
      </div>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={inputValue} 
        onChange={handleChange} 
          className="search-input"
        />
      </div>

      <div className="Cart_nav">
        <MdAccountCircle className="icon_nav" />
        <CiHeart className="icon_nav" />
        <div className="cart-icon-container">
          <IoCartOutline className="icon_nav" onClick={showDrawer} />
          {getTotalItems() > 0 && (
            <div className="cart-item-count">
              {getTotalItems()}
            </div>
          )}
        </div>
      </div>

      <Drawer onClose={onClose} open={open} title="Your Cart">
        <div className="CartItems">
          <GetCartDetails />
        </div>

        <div className="cart-total">
          <h3>Total: ${getTotalPrice()}</h3>
        </div>
      </Drawer>
    </div>
  );
};

export default Nav;
