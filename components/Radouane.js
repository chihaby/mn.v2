import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Radouane.module.css'

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
            <h3>Image</h3>
          </Col>
          <Col  className={styles.paragraph}  xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
            <h2>Radouane</h2>
            <p >I grew up in Casablanca, Morocco in a lively and vibrant music culture. The incredible passion and joy of the Mediterranean music of Morocco is a fusion of Arabic, Spanish, French and Greek musical influences fueled by centuries of trade between the Mediterranean's dynamic and rich cultures. The North African music scene is inseparable from it's Mediterranean neighbors from whom it shares a rich history of melodic decadence. I heard the rhythms and beats that would be a soundtrack to my life on every Casablancan beach and in every well-traveled coffee shop, but it was not until my mid-teens that I was introduced to the guitar and began to play. Largely self-taugh </p>       
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default radouane