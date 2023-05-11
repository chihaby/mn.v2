import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Radouane.module.css'
import Radouane from '../public/img/Radouane.jpg';

const radouane = () => {
  return (
    <div className={styles.container}>
      <Container>
        <br />
        <div>
          <h1>About </h1>
        </div>
        <br />
        <Row>
          <Col  xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
            <div className={styles.image__div}>
              <Image src={Radouane} with={300} height={400} alt='photo of radouane from mediterranean nights' responsive/>
            </div>
          </Col>
          <Col  className={styles.paragraph}  xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
            <h2>Radouane</h2>
            <p >I grew up in Casablanca, Morocco in a lively and vibrant music culture. The incredible passion and joy of the Mediterranean music of Morocco is a fusion of Arabic, Spanish, French and Greek musical influences fueled by centuries of trade between the Mediterranean{"'"}s dynamic and rich cultures. The North African music scene is inseparable from it{"'"}s Mediterranean neighbors from whom it shares a rich history of melodic decadence. I heard the rhythms and beats that would be a ... </p>  
            <Link href={"/about"}>READ MORE</Link>     
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default radouane