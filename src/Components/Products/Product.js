import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './Product.css'
import { Link } from 'react-router-dom'
function Product() {
  return (
    <div>
      <Container className='product-container' id='product'>
      <h1 className='text-center mt-5 mb-3'><i class="fas fa-shapes"></i>&nbsp;Products Details</h1>
      <p>Geneca Life Science currently focuses on Export and domestic Trade of the following Products-</p>
              <Row>
                <Col md={3} className='product-wraper'>
                <Card className='product-card'>
                <Card.Img variant="top" src="images/oil.jpg" />
                <Card.Body>
                    <Card.Title>Oil Seeds</Card.Title>
                    <Link to="/oil-seeds"><button className='btn btn-success rounded-0 d-inline-flex p-3 position-absolute' >View Products</button></Link>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} className='product-wraper'>
                <Card  className='product-card'>
                <Card.Img variant="top" src="images/hns/coriander.jpg" />
                <Card.Body>
                    <Card.Title>Herbs and Spices</Card.Title>
                    <Link to="/Herbs-and-seeds"><button className='btn btn-success rounded-0 d-inline-flex p-3 position-absolute ms-7' >View Products</button></Link>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} className='product-wraper'>
                <Card  className='product-card'>
                <Card.Img variant="top" src="images/medicinal/morlive.jpg" />
                <Card.Body>
                    <Card.Title>Medicinal Plants and Herbs</Card.Title>
                    <Link to="/Medicinal-plants-and-herbs"><button className='btn btn-success rounded-0 d-inline-flex p-3 position-absolute' >View Products</button></Link>
                </Card.Body>
                </Card>
                </Col>  
                <Col md={3} className='product-wraper'>
                <Card className='product-card'>
                <Card.Img variant="top" src="images/agroseed/black-cumin.jpg" />
                <Card.Body>
                    <Card.Title>Agro Seeds</Card.Title>
                    <Link to="/Agro-Seeeds"><button className='btn btn-success rounded-0 d-inline-flex p-3 position-absolute' >View Products</button></Link>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col md={3} className='product-wraper'>
                <Card className='product-card'>
                <Card.Img variant="top" src="images/gng/ginger.jpg" />
                <Card.Body>
                    <Card.Title>Ginger And Garlic</Card.Title>
                    <Link to="/Ginger-Garlic"><button className='btn btn-success rounded-0 d-inline-flex p-3 position-absolute' >View Products</button></Link>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} className='product-wraper'>
                <Card  className='product-card'>
                <Card.Img variant="top" src="images/honey-jag-p/honey.jpg" />
                <Card.Body>
                    <Card.Title>Honey, Jaggery Sugar Products and Molasses</Card.Title>
                    <Link to="/Honey-Jaggery-Sugar-Product"><button className='btn btn-success rounded-0 d-inline-flex p-3 position-absolute ms-7' >View Products</button></Link>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} className='product-wraper'>
                <Card  className='product-card'>
                <Card.Img variant="top" src="images/food-products/fruit-pulp.jpg" />
                <Card.Body>
                    <Card.Title>Food Products</Card.Title>
                    <Link to="/Food-Products"><button className='btn btn-success rounded-0 d-inline-flex p-3 position-absolute' >View Products</button></Link>
                </Card.Body>
                </Card>
                </Col>  
                <Col md={3} className='product-wraper'>
                <Card className='product-card'>
                <Card.Img variant="top" src="images/flour/flourc.jpg" />
                <Card.Body>
                    <Card.Title>Flour-</Card.Title>
                    <Link to="/Flour"><button className='btn btn-success rounded-0 d-inline-flex p-3 position-absolute' >View Products</button></Link>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Product