import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Radouane.module.css'
import YoutubeEmbed from "./YoutubeEmbed";

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
            <p >I grew up in Casablanca, Morocco in a lively and vibrant music culture. The incredible passion and joy of the Mediterranean music of Morocco is a fusion of Arabic, Spanish, French and Greek musical influences fueled by centuries of trade between the Mediterranean's dynamic and rich cultures. The North African music scene is inseparable from it's Mediterranean neighbors from whom it shares a rich history of melodic decadence. I heard the rhythms and beats that would be a soundtrack to my life on every Casablancan beach and in every well-traveled coffee shop, but it was not until my mid-teens that I was introduced to the guitar and began to play. Largely self-taught - I would play, western pop, rock, blues and jazz, with family and friends. Later I would hear a Spanish guitar solo on a Casablancan beach and he had an epiphany. This instrument produced the most pleasing notes I had ever heard. Despite it's simple clean sound it allows you to create emotional and honest music. The Spanish guitar became Radouane's favorite instrument. Since immigrating to the United States I have continued to play, collaborate and experiment with the Mediterranean sounds I grew up with. The more I listen, play, and compose; the more I understand that I have so much more to learn. Music is a big part of my life. I hope that every story in this album could cross the barriers of language and culture, and that it would find it's way to you in the universal language of music.</p>       
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default radouane