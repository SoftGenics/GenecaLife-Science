import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'
function AgroSeeds() {
  return (
    <div>
         <Container className='pages-container' >
            <h1 className='text-center mt-5 mb-3'>Agro Seeds</h1>
            <p className='text-center'> A seed drill is a device used in agriculture that sows seeds for crops by positioning them in the soil and burying them to a specific depth. This ensures that seeds will be distributed evenly.</p>
            <Row>
                <Col md={4} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/agroseed/cumin.jpg" />
                <Card.Body>
                    <Card.Title>Cumin Seeds and Powder</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/agroseed/basil-seeds.jpg" />
                <Card.Body>
                    <Card.Title>Basil Seeds</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/agroseed/black-cumin.jpg" />
                <Card.Body>
                    <Card.Title>Black Cumin (Kalonji Seeds)</Card.Title>
                </Card.Body>
                </Card>
                </Col>  
            </Row>
            </Container>
        <Footer />
    </div>
  )
}

export default AgroSeeds