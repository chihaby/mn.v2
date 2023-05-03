import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const thankYou = () => {
  return (
    <Container>
      <br /><br />
      <Row>
        <Col>
          <h2>Thank you for contacting us. We will reach back to you as soon as possible</h2>
        </Col>
      </Row>
      <br /><br />
      <Row>
        <Col>
         <div style={{width: '300px', height: '100px', padding: '30px', textAlign: 'center'}}>
          <Link href={'/'}><span style={{fontSize: '18px', fontWeight: 'bold'}}>{'< Go back to homepage'}</span></Link>
         </div>
        </Col>
      </Row>
    </Container>
  )
}

export default thankYou