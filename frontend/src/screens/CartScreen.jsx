import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Row, Col, ListGroup, Image, Form, Button, Card} from "react-bootstrap";
import Message from "../components/Message";
import {addToCart} from "../actions/cartActions";




const CartScreen = () => {
  const productId = useParams().id;
  const qty = Number(new URLSearchParams(window.location.search).get("qty")) || 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart; 

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
};

export default CartScreen;
