import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Simeon.module.css'
import YoutubeEmbed from "./YoutubeEmbed";

const Simeon = () => {
  return (
    <div className={styles.container}>
      <Container>
        <br />
        <br />
        <Row>
          <Col  xs={{span: 12, order: 1}} md={{span: 6, order: 1}}>
          <h3>Image</h3>
          </Col>
          <Col  className={styles.paragraph}  xs={{span: 12, order: 2}} md={{span: 6, order: 2}}>
            <h2>Simeon</h2>
            <p >I grew up in Bulgaria under a Soviet influenced country and culture until my late teens. I excelled at math, science and reading in school, but I also intensely enjoyed music as a teenager. My father's love of music kept him playing Bulgarian folk and popular music of the 60s and 70s during all hours of the day at our home. Bulgarian music is rough and real. It has to be. The Bulgarian people have a national conscience and identity forged by hundreds of years of struggle for sovereignty and freedom. When I learned the guitar, it was a deliberate and methodical effort. I had to find out the mechanics and art behind the deeply moving music that filled me with joy.</p>       
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Simeon