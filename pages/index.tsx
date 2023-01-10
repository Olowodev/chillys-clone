import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/Banner'
import Collections from '../components/collections/Collections'
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Marquee from '../components/marquee/Marquee'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Banner/>
        <Header />
        <Marquee />
        <FeaturedProducts />
        <Collections />
        <Footer />
      </div>
    </div>
  )
}
