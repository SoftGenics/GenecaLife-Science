import React, { useState } from 'react';
import FAQ from './Faq';
import './Faq.css';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function FAQ_ANS() {
  const [faqs, setfaqs] = useState([
    {
      question: 'What is Geneca Life Science?',
      answer: 'Geneca Life Science, pre-eminent position as one of India \'s fast growing company in the agricultural sector is based on strong and enduring farmer partnerships that has revolutionized and transformed the rural agricultural sector. A unique rural digital infrastructure network, coupled with deep understanding of agricultural practices and intensive research, has built a competitive and efficient supply chain that creates and delivers immense value across the agricultural value chain. Geneca Life Science is a Leading exporters of Agri products from India, Geneca Life Science sources the finest products of Indian Seed Industry, Food Grains, Spices and various other Agri commodities.',
      open: false
    },
    {
      question: 'Where our Agro processing units located ? ',
      answer: 'Our Agro processing units located in four different regions in India. We have installed state-of-the-art machines for ensuring smooth and bulk production of the products. We have developed indigenous processing technology with very productive and consistent quality production plants producing finest grade of products meeting all International standards of this industry.',
      open: false
    },
    {
      question: 'Our long-term relationship',
      answer: 'The long-term relationship we have with our end users of agro-commodities, whether it is industrial or institutional sector, supermarkets or restaurants, also point towards the trust they have in our company and ultimately our product quality.',
      open: false
    }, 
    {
        question: 'Where the procurement centers are located ',
        answer: 'The procurement centers are located at major Seeds, spices, pulses and food grains growing areas. Working on the principles of backward integration, our agricultural experts and field staff keep a constant interaction with the farmers spreading awareness towards better farming practices, better post harvest operations and organic methods of pest control. All this results in quality yield for the farmers and better raw materials for the company.',
        open: false
      }
  
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <>
      <Container style={{marginTop:'5rem'}}>
    <br></br>
      <h1 className='mt-3 text-center'>FAQ</h1>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      </Container>
      <Footer />
      </>
  );
}

export default FAQ_ANS;