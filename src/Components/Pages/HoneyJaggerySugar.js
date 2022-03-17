import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'
function HoneyJaggerySugar() {
  return (
    <div>
     <Container className='pages-container' >
            <h1 className='text-center mt-5 mb-3'>Honey, Jaggery Sugar Products And Molasses</h1>
            <p className='text-center'>Both honey and jaggery will increase the blood sugar levels but it is better to switch to honey or jaggery because they contain micro-nutrients.</p>
            <p className='text-center'>Jaggery is a traditional non-centrifugal cane sugar consumed in the Indian Subcontinent, Southeast Asia, and Africa. It is a concentrated product of cane juice and often date or palm sap without separation of the molasses and crystals, and can vary from golden brown to dark brown in colour. </p>
            <Row>
                <Col md={4} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/honey-jag-p/honey.jpg" />
                <Card.Body>
                    <Card.Title>Honey</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/honey-jag-p/jaggery.jpg" />
                <Card.Body>
                    <Card.Title>Jaggery Sugar Products</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/honey-jag-p/mollases.jpg" />
                <Card.Body>
                    <Card.Title>Molasses</Card.Title>
                </Card.Body>
                </Card>
                </Col>  
            </Row>
            </Container>
        <Footer />
    </div>
  )
}

export default HoneyJaggerySugar