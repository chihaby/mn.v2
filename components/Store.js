import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import styles from '../styles/Store.module.css'
import Image from 'next/image'
import amazon from '../public/img/amazon.jpg'
import ebay from '../public/img/ebay.png'

const Store = () => {
  return (
    <div className={styles.container}>
      <Container >
        <div>
          <br />
          <h1>Store</h1>
          <br />
          <p>We have CDs of the album "Azure" available for sale in the following stores.</p>
          <br />
        </div>
        <Row >  
          <Col>
            <h2>Amazon</h2>
            <Link href="https://www.amazon.com/dp/B01M2CFLMJ/ref=dm_rwp_pur_lnd_albm_fr" style={{ color: 'inherit', textDecoration: 'inherit'}} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Card className={styles.services}>
                  <Card.Body>
                  <Card.Title>Amazon</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">CDs</Card.Subtitle>
                    <Image src={amazon} alt='amazon logo' width={300} height={150}/><br /><br />
                    <Card.Text>
                      Purchase CDs directly from our AMAZON store. FREE SHIPPING
                    </Card.Text>
                    <span>VISIT STORE</span>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </Col>          
          <Col>
            <h2>eBay</h2>
            <Link href="https://www.ebay.com/itm/314053731461?epid=12046045253&hash=item491f0fa485:g:AmsAAOSw0f1htth4" style={{ color: 'inherit', textDecoration: 'inherit'}} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Card className={styles.services}>
                <Card.Body>
                  <Card.Title>eBay</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">CDs</Card.Subtitle>
                  <Image src={ebay} alt='amazon logo' width={300} height={150}/><br /><br />
                  <Card.Text>
                    Purchase CDs directly from our eBAY store.<br/> FREE SHIPPING
                  </Card.Text>
                  <Link href={'/contact'}>VISIT STORE</Link>
                </Card.Body>
              </Card>
            </a>
            </Link>
          </Col>
        </Row>
        <br /><br />
      </Container>
    </div>
  )
}

export default Store