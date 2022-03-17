import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './About.css'
function About() {
  return (
    <div>
        <Container className='about-container' id='about'>
        <h2 className="text-center mt-3 mb-5" style={{color:'rgb(71, 71, 71)'}}>About Geneca Life Science :-</h2>
        <Container>
            
                <Card >
                <Row className='about-card-wraper '>
                    <Col md={5}>
                    <Card.Img variant="top" src="images/logo.png" />
                    </Col>
                    <Col md={7}>
                    <Card.Body>
                        <Card.Text>Established in 2011 , Geneca Life Science has made a name for itself in the list of top suppliers of in India. The supplier company is located in Indore, Madhya Pradesh and is one of the leading sellers of listed products.
Geneca Life Science is listed in Trade India's list of verified sellers offering supreme quality of etc. Buy in bulk from us for the best quality products and service.

</Card.Text>
                    <br></br>
                    <br></br>
                    <div className='about-icon'>
                        <i className="fas fa-business-time"></i>&nbsp;<p>BUSINESS TYPE
<br></br>Manufacturer, Supplier</p>
                        <i className="fas fa-address-card"></i>&nbsp;<p>EMPLOYEE COUNT
<br></br>22</p>
                        <i className="fas fa-calendar"></i>&nbsp;<p>ESTABLISHMENT
<br></br>2011</p>  
                    </div>
                    </Card.Body>
                    </Col>
                    </Row>
                    </Card>
                 
            </Container>
        </Container>
    </div>
  )
}

export default About