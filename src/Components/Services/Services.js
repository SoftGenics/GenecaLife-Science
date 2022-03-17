import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import './Service.css';
 
  
  
function Services() {
  
  return (
    <div id='service'>
       <Container className='service-container' >
            <h1 className='text-center mt-5 mb-3'><i class="fab fa-servicestack"></i>&nbsp;Our Products<span>/</span>Services</h1>
            <Row>
                <Col md={4} className='service-wraper'>
                <Card className='service-card'>
                <Card.Img variant="top" src="images/seed.jpg" />
                <Card.Body>
                    <Card.Title>Seeds</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='service-wraper'>
                <Card  className='service-card'>
                <Card.Img variant="top" src="images/chem1.jpg" />
                <Card.Body>
                    <Card.Title>Chemical Fertilizer</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='service-wraper'>
                <Card  className='service-card'>
                <Card.Img variant="top" src="images/fertiseed.jpg" />
                <Card.Body>
                    <Card.Title>Fertilizer Seed</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>  
            </Row>
        </Container>
    </div>
  )
}

export default Services