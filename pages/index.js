import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mediterranean Nights</title>
        <meta name="description" content="Mediterranean Nights is a band consisting of Radouane and Simeon their debut album Azure has gained a popularity with songs such as a la vida iris unrequited love nights on the mediterranean and others.  " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <Footer />
    </>
  )
}
