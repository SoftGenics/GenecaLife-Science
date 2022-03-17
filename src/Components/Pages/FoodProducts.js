import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'
function FoodProducts() {
  return (
    <div>
        <Container className='pages-container' >
            <h1 className='text-center mt-5 mb-3'>Food Products</h1>
            <p className='text-center'>Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.</p>
                <Row>
                <Col md={3} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/food-products/onion.jpg" />
                <Card.Body>
                    <Card.Title>Onion, Ginger and Garlic Paste</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/food-products/pasta.jpg" />
                <Card.Body>
                    <Card.Title>Pasta</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/food-products/tomato-purees.jpg" />
                <Card.Body>
                    <Card.Title>Tomato Purees</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/food-products/fruit-pulp.jpg" />
                <Card.Body>
                    <Card.Title>Fruit Pulp</Card.Title>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
  )
}

export default FoodProducts