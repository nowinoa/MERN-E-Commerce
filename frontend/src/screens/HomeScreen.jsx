import React, { useState, useEffect } from "react";
import Product from "../components/Product.jsx";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  // this is an asynchonous function, because otherwise
  // the code will stop here until this block is executed
  // and then continue with the run. We don't want that,
  // so we made it async. 
  useEffect(() => {
    const fetchProducts = async () => {
      // promises can bring data inmediatelly or in the future, or may never
      // that is why is called promise. 
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };
    fetchProducts()
  }, []);

  return (
    <>
      <h1 className="p-3 text-center">Latest Products</h1>
      <Row className="mx-5">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
