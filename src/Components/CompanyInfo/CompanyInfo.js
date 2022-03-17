import React from 'react'
import Iframe from 'react-iframe'
import { Container,Row, Col } from 'react-bootstrap'
import './CompanyInfo.css'
function CompanyInfo() {
  return (
    <div id='contact-us'>
        <Container fluid style={{ padding:'2rem'}} id='company-info'>
            <Row>
                 <Col md={6}>
                <Container style={{padding:'1.5rem'}}>
                  <h1 className='text-center text-muted mb-3'>Our Brochure</h1>
                <Iframe src='Brochure/brochure .pdf'
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                </Container>
                </Col>
                <Col md={6}>
                <Container style={{padding:'1.5rem'}}>
                <h1 className='text-center text-muted mb-3'>Find us On Map</h1>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d471025.02616124955!2d75.55436396127625!3d22.73258908687249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39631d2d5aaaaaab%3A0xd01940f1c2a785e0!2sCipla%20Limited%2C%2098%20A%2C%2098%20B%2C%20S%20D%20A%20Annexe%2C%20S%20D%20A%20Compound%2C%20Agra%20Bombay%20Rd%2C%20Dewas%20Naka%2C%20Lasudia%20Mori%2C%20Indore%2C%20Madhya%20Pradesh%20452008!3m2!1d22.7878836!2d75.9015208!5e0!3m2!1sen!2sin!4v1647431181442!5m2!1sen!2sin"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CompanyInfo