import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'
import styles from '../styles/musicPage.module.css'
import azure from '../public/img/azure.jpg'

const music = () => {

  return (
    <div className={styles.container}>
      <Container>
        <br/>
        <h1>Music</h1>
        <br />
        <p>The album Azure by Mediterranean Nights is available on most streaming platforms</p>

        <Row>
          <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}}>
            <div className={styles.iamge__container}>
              <Image src={azure} alt="oceo music image" prop="fill" className={styles.image}/>
            </div> 
          </Col>
          <Col  xs={{span: 12, order: 2}} md={{span: 6, order: 2}} >
            <ListGroup className={styles.list_group}>
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://open.spotify.com/artist/6DOeOC7rnHjG6Aa6czQ05v?si=aLzaxVlQSumrNG__qdUVpg" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    Spotify
                  </a>
                </Link>
              </ListGroup.Item>              
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://music.apple.com/us/artist/mediterranean-nights/398768066" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    iTunes
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://amazon.com/music/player/albums/B0047D37WE?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_0KmTfoALYjDFqPVhEY6Lequpv" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    Amazon
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://www.pandora.com/artist/mediterranean-nights/ARbZXbxph9J62r9?part=ug-desktop&corr=178134079986733955" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    Pandora
                  </a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_item}>
                <Link href="https://www.youtube.com/@mediterraneanmusic" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <br /><br />
      <Footer />
    </div>
  )
}

export default music