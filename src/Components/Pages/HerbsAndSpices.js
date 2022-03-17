import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'
function HerbsAndSpices() {
  return (
    <div>
        <Container className='pages-container' >
            <h1 className='text-center mt-5 mb-3'>Herbs And Spices</h1>
            <p className='text-center'> This is a list of culinary herbs and spices. Specifically these are food or drink additives of mostly botanical origin used in nutritionally insignificant quantities for flavoring or coloring.</p>
            <Row>
                <Col md={4} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/hns/methi.jpg" />
                <Card.Body>
                    <Card.Title>Fenugreek - Methi</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/hns/ajwain.jpg" />
                <Card.Body>
                    <Card.Title>Carom Seeds - Ajwain</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/hns/turmeric.jpg" />
                <Card.Body>
                    <Card.Title>Tureric Fingers and Powder -Haldi</Card.Title>
                </Card.Body>
                </Card>
                </Col>  
            </Row>
            <Row>
                <Col md={3} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/hns/red-chilli.jpg" />
                <Card.Body>
                    <Card.Title>Red Chilli(Sun Dried and Dehydrated) and Powder</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/hns/green-chilli.jpg" />
                <Card.Body>
                    <Card.Title>Green Chilli Powder</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/hns/black-pepper.jpg" />
                <Card.Body>
                    <Card.Title>Black Pepper</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/hns/coriander.jpg" />
                <Card.Body>
                    <Card.Title>Coriander Seeds and Powder</Card.Title>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
  )
}

export default HerbsAndSpices