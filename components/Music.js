import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import styles from '../styles/Music.module.css'
import YoutubeEmbed from "./YoutubeEmbed";

const Music = () => {
  return (
    <div className={styles.container}>
      <Container>
        <br />
        <div>
          <h1>Latest work</h1>
        </div>
        <br />
        <Row>
          <Col  xs={{span: 12, order: 1}} md={{span: 6, order: 1}}>
            <YoutubeEmbed />
          </Col>
          <Col  className={styles.paragraph}  xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
            <h2>Azure</h2>
            <p >An eclectic mix of Flamenco, Greek, Eastern European and Middle Eastern tradition, all seamlessly fused into one. This deep and sensual music will touch and move your soul like no other.</p>   
            <div>
              <Link href={"/music"}>ALL MUSIC RELEASES</Link>
            </div>       
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  )
}

export default Music