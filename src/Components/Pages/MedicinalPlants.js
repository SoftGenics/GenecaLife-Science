import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'
function MedicinalPlants() {
  return (
    <div>
     <Container className='pages-container' >
            <h1 className='text-center mt-5 mb-3'>Medicinal Plants and Herbs</h1>
            <p className='text-center'> Medicinal plants, also called medicinal herbs, have been discovered and used in traditional medicine practices since prehistoric times. Plants synthesise hundreds of chemical compounds for functions including defence against insects, fungi, diseases, and herbivorous mammals. Numerous phytochemicals with potential or established biological activity have been identified.</p>
            <Row>
                <Col md={4} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/medicinal/psy.jpg" />
                <Card.Body>
                    <Card.Title>Psyllium Husk (Isabgol)</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/medicinal/morlive.jpg" />
                <Card.Body>
                    <Card.Title>Moringa Leaves</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/medicinal/senna.jpg" />
                <Card.Body>
                    <Card.Title>Senna Leaves</Card.Title>
                </Card.Body>
                </Card>
                </Col>  
            </Row>
            <Row>
                <Col md={6} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/medicinal/aswagandha.jpg" />
                <Card.Body>
                    <Card.Title>Ashwagandha</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={6} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/medicinal/basil.jpg" />
                <Card.Body>
                    <Card.Title>Basil Leaves and Powder</Card.Title>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
  )
}

export default MedicinalPlants