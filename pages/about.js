import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import jam from '../public/img/mn-jam.png'
import Footer from '@/components/Footer'


const about = () => {
  return (
    <div>
      <Container>
        <br />
        <h1>About</h1>
        <br />
        <Row>
          <Image src={jam} alt="Photo of Radouane and Simeon playing guitar" width={400} height={600} responsive/>
        </Row>
        <br />
        <Row>
          <Col xs={{span: 12, order: 1}} md={{span: 6}}>
            <h2>Simeon</h2>
            <p>I grew up in Bulgaria under a Soviet influenced country and culture until my late teens. I excelled at math, science and reading in school, but I also intensely enjoyed music as a teenager. My father{"'"}s love of music kept him playing Bulgarian folk and popular music of the 60s and 70s during all hours of the day at our home. Bulgarian music is rough and real. It has to be. The Bulgarian people have a national conscience and identity forged by hundreds of years of struggle for sovereignty and freedom. When I learned the guitar, it was a deliberate and methodical effort. I had to find out the mechanics and art behind the deeply moving music that filled me with joy. I began college in Plovdiv, Bulgaria and finally had an opportunity to fulfill my adventurous spirit and academic ambitions by traveling abroad. Studying in the United States has been a wonderful experience and I have made many lifelong friends along the way. My soul has learned a lot from the many wonderful people and musicians I have met from all over the world. The music in this album from Radouane and I is truly played from the heart and I hope you enjoy it. I would really like to thank my family, and especially my sister, who actually bought me my first electric guitar with the only money she had at the time, and has always encouraged me, from the moment I started learning how to play the guitar. Without her unconditional support, I would have, most likely, never learned</p>
          </Col>
          <Col xs={{span: 12, order: 2}} md={{span: 6}}>
            <h2>Radouane</h2>
            <p>I grew up in Casablanca, Morocco in a lively and vibrant music culture. The incredible passion and joy of the Mediterranean music of Morocco is a fusion of Arabic, Spanish, French and Greek musical influences fueled by centuries of trade between the Mediterranean{"'"}s dynamic and rich cultures. The North African music scene is inseparable from it{"'"}s Mediterranean neighbors from whom it shares a rich history of melodic decadence. I heard the rhythms and beats that would be a soundtrack to my life on every Casablancan beach and in every well-traveled coffee shop, but it was not until my mid-teens that I was introduced to the guitar and began to play. Largely self-taught - I would play, western pop, rock, blues and jazz, with family and friends. Later I would hear a Spanish guitar solo on a Casablancan beach and he had an epiphany. This instrument produced the most pleasing notes I had ever heard. Despite it{"'"}s simple clean sound it allows you to create emotional and honest music. The Spanish guitar became Radouane{"'"}s favorite instrument. Since immigrating to the United States I have continued to play, collaborate and experiment with the Mediterranean sounds I grew up with. The more I listen, play, and compose; the more I understand that I have so much more to learn. Music is a big part of my life. I hope that every story in this album could cross the barriers of language and culture, and that it would find it{"'"}s way to you in the universal language of music.</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default about