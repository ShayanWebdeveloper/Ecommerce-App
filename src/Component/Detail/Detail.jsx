import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Flex, Spin } from 'antd';
import './Detail.css';
import Api from '../Api/Api';
import axios from 'axios';
import Nav from '../Nav/Nav';
import { FaCartPlus } from 'react-icons/fa';
import { IoBagRemove } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks
import { addToCart, removeFromCart } from '../../Redux/Action'; // Redux actions

const Detail = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state); 
  const { id } = useParams();
  const [data, setData] = useState([]);
  
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

  const item = data.find((product) => product.id - 1 === parseInt(id));

  if (!item) {
    return (
      <div>
        <Flex align="center" gap="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Flex>
      </div>
    );
  }

  // Add or remove item from cart
  const Add_to_Cart = (productId) => {
    if (cartState.includes(productId)) {
      dispatch(removeFromCart(productId)); // Remove from cart if it's already there
    } else {
      dispatch(addToCart(productId)); // Add to cart if not in the cart
    }
  };

  // Check if the product is already in the cart
  const isInCart = (productId) => cartState.includes(productId);

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="left-column">
          <img data-image="black" src={item.image} alt="black" />
          <img data-image="blue" src={item.image} alt="blue" />
          <img data-image="red" className="active" src={item.image} alt="red" />
        </div>

        <div className="right-column">
          <div className="product-description">
            <span>{item.category}</span>
            <h1>{item.title}</h1>
            <p>
              The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation.
              Sturdy headband and on-ear cushions suitable for live performance.
            </p>
          </div>

          <div className="product-configuration">
            <div className="product-color">
              <span>Color</span>
              <div className="color-choose">
                <div>
                  <input data-image="red" type="radio" id="red" name="color" value="red" checked />
                  <label htmlFor="red"><span></span></label>
                </div>
                <div>
                  <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
                  <label htmlFor="blue"><span></span></label>
                </div>
                <div>
                  <input data-image="black" type="radio" id="black" name="color" value="black" />
                  <label htmlFor="black"><span></span></label>
                </div>
              </div>
            </div>
          </div>

          <div className="product-price">
            <span>{item.price}</span>
            <button
              onClick={() => Add_to_Cart(item.id)} // Trigger Add/Remove from Cart
              className={isInCart(item.id) ? 'remove-btn' : 'add-btn'}
            >
              {isInCart(item.id) ? (
                <>
                  <IoBagRemove /> Remove from Cart
                </>
              ) : (
                <>
                  <FaCartPlus /> Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
