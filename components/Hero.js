import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import styles from '../styles/Hero.module.css'
import azure from '../public/img/azure.jpg'
// import logo from '../public/img/logo.png'
import Subscribe from './Subscribe';


const Hero = () => {
  return (
    <div className={styles.container}>
      <Container >
        <Row>
        <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}} >      
            <Card className={styles.hero__left}>
              <div className={styles.image__container}>
                <Image src={azure} width={370} alt="Mediterranean Nights Azure album cover" prop="fill" className={styles.image}  />
              </div> 
            </Card>
          </Col>
          <Col xs={{span: 12, order: 2}} md={{span: 6, order: 2}}>
            <div className={styles.hero__right} >
              <span className={styles.strapline}>Mediterranean Nights</span>
              <p className={styles.description}> Discover the beauty of the Mediterranean music with sensuous compositions like <em>A La Vida</em>, <em>Iris</em>, <em>Unrequited Love</em> and more.</p>
              <p>
                Subscribe now and never miss out on the latest releases. 
              </p>
              <Subscribe />
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
