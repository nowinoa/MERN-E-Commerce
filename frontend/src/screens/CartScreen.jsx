import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = () => {
  const productId = useParams().id;
  const qty =
    Number(new URLSearchParams(window.location.search).get("qty")) || 1;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
    console.log("checkout clicked");
  };

  return (
    <Row>
      <Col md={9} className="mx-auto">
        <h1 className="p-3 text-center">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            <div className="d-flex justify-content-between align-items-center px-2">
              <span>Your cart is empty</span>
              <Link to="/">Go back</Link>
            </div>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product} className="mb-4 border-1">
                <Row className="text-center align-items-center">
                  <Col xs={4} md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col xs={5} md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col xs={2} md={2}>
                    <strong>${item.price}</strong>
                  </Col>
                  <Col xs={5} md={2} style={{ marginTop: "30px" }}>
                    <Form.Select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col xs={2} md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                      style={{ marginTop: "30px" }}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4} className="mx-auto">
        <Card className="border-1">
          <ListGroup variant="flush">
            <ListGroup.Item className="text-center">
              <h3>
                Subtotal: $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </h3>
              <span>
                Items: {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              <Button
                type="button"
                className="w-100 mb-1"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
