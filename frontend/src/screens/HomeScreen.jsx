import React from 'react';
import products from '../products';
import Product from '../components/Product.jsx';
import { Col, Row } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <>
     <h1 className='p-3 text-center'>Latest Products</h1>   
     <Row className='mx-5'>
        {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
     </Row>
    </>
  )
}

export default HomeScreen