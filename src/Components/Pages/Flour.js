import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'
function Flour() {
  return (
    <div>
               <Container className='pages-container' >
            <h1 className='text-center mt-5 mb-3'>Flour</h1>
            <p className='text-center'>Flour is a powder made by grinding raw grains, roots, beans, nuts, or seeds. Flours are used to make many different foods. Cereal flour, particularly wheat flour, is the main ingredient of bread, which is a staple food for many cultures.</p>
            <Row>
                <Col md={4} className='pages-wraper'>
                <Card className='pages-card'>
                <Card.Img variant="top" src="images/flour/wheat-flour.jpg" />
                <Card.Body>
                    <Card.Title>Wheat Flour</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/flour/flourc.jpg" />
                <Card.Body>
                    <Card.Title>Corn Flour</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card'>
                <Card.Img variant="top" src="images/flour/multigrain-flour.jpg" />
                <Card.Body>
                    <Card.Title>Multigrain Flour</Card.Title>
                </Card.Body>
                </Card>
                </Col>  
            </Row>
            </Container>
        <Footer />
    </div>
  )
}

export default Flour