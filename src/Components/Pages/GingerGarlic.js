import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'
function GingerGarlic() {
  return (
    <div>
               <Container className='pages-container' >
            <h1 className='text-center mt-5 mb-3'>Ginger and Garlic</h1>
            <p className='text-center'> Ginger garlic masala is a crushed mixture of raw ginger and garlic cloves.[1][2]

Optionally, salt is added to the ginger garlic paste while crushing.</p>
            <Row>
                <Col md={4} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/gng/ginger.jpg" />
                <Card.Body>
                    <Card.Title>Ginger And Garlic</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/gng/masala.jpg" />
                <Card.Body>
                    <Card.Title>Ginger and Garlic paste</Card.Title>
                </Card.Body>
                </Card>
                </Col>
            </Row>

        </Container>
        <Footer />
    </div>
  )
}

export default GingerGarlic