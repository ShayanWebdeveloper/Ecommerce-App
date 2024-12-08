import React, { useState, useEffect } from 'react';
import '../Card/Card.css';
import Api from '../Api/Api';
import { FaCartPlus } from "react-icons/fa";
import axios from 'axios';
import { IoBagRemove } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, setCart } from '../../Redux/Action';
import { Spin, Flex } from 'antd';

const Card = ({ inputValue }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const cartState = useSelector(state => state);
    const dispatch = useDispatch();

    // Fetch data from API
    const fetchData = () => {
        axios
            .get(Api)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
        const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        dispatch(setCart(savedCartItems));
    }, [dispatch]);

    const navigate = useNavigate();


    const Add_to_Cart = (id) => {
        if (cartState.includes(id)) {
            dispatch(removeFromCart(id));
        } else {
            dispatch(addToCart(id));
        }
    };


    const isInCart = (id) => cartState.includes(id);

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.category.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div className="card-container">

            {loading ? (
                <div className="loader">
                    <Flex align="center" gap="middle">
                        <Spin size="small" />
                        <Spin />
                        <Spin size="large" />
                    </Flex>
                </div>
            ) : (
                <>
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <div key={item.id} className="card-item">
                                <div className="card-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="card-info">
                                    <div className="card-category">
                                        <p>{item.category}</p>
                                    </div>
                                    <div className="card-title">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="card-price">
                                        <p>${item.price}</p>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <button className="view-details-btn" onClick={() => navigate(`/details/${item.id - 1}`)}>
                                        <FaRegEye /> View Details
                                    </button>
                                    <button
                                        onClick={() => Add_to_Cart(item.id)}
                                        className={isInCart(item.id) ? 'remove-btn' : 'add-btn'}>
                                        {isInCart(item.id) ? (
                                            <> <IoBagRemove /> Remove from Cart</>
                                        ) : (
                                            <>  <FaCartPlus /> Add to Cart</>
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products found for "{inputValue}".</p>
                    )}
                </>
            )}
        </div>
    );
};

export default Card;
