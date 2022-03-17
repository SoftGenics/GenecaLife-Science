import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'
function OilSeeds() {
  return (
    <div>
       <Container className='pages-container' >
            <h1 className='text-center mt-5 mb-3'>Oil Seeds</h1>
            <p className='text-center'> Seed oils are vegetable oils obtained from the seed (endosperm) of some plant, rather than the fruit (pericarp). Most vegetable oils are seed oils. Examples are sunflower, corn, and sesame oils.</p>
            <Row>
                <Col md={4} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/oilseeds/mustard.jpg" />
                <Card.Body>
                    <Card.Title>Mustards Seeds - Sarso(Black and Yellow)</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/oilseeds/flex-seed.jpg" />
                <Card.Body>
                    <Card.Title>Flex Seeds - Alsi</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/oilseeds/btil.jpg" />
                <Card.Body>
                    <Card.Title>Sesame-Till(Black and White)</Card.Title>
                </Card.Body>
                </Card>
                </Col>  
            </Row>
            <Row>
                <Col md={6} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/oilseeds/caster.jpg" />
                <Card.Body>
                    <Card.Title>Caster Seeds-Arandi</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={6} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/oilseeds/soya.jpg" />
                <Card.Body>
                    <Card.Title>Soyabean Seeds</Card.Title>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
  )
}

export default OilSeeds