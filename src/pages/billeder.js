import React from 'react'

import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { colors } from '../utils/theme'

const images = [
  '01_65011668.jpg',
  '02_65191775.jpg',
  '03_65255243.jpg',
  '04_64924192.jpg',
  '05_64599331.jpg',
  '06_65103018.jpg',
  '07_64499221.jpg',
  '08_64882633.jpg',
  '09_64862566.jpg'
]

const Images = () => (
  <Layout footer>
    <SEO title="Billeder" keywords={['bryllup', 'billeder']} />
    <section css={styles.section}>
      <Container>
        <h1 css={styles.title}>Billeder</h1>
        <p>Send os meget gerne jeres billeder fra dagen, så vi kan lægge dem op her.</p>
        <p>Billeder kan sendes på mail til Sara på <a href="mailto:sara.jerichau@gmail.com, klovborg@gmail.com?subject=Bryllups billeder" css={styles.link}>sara.jerichau@gmail.com</a></p>
        {images.map((img, i) => <img key={i} css={styles.image} src={`https://res.cloudinary.com/frebliklo/image/upload/ar_1:1,c_fill,g_auto:body,f_auto,q_100,w_1000/v1563136168/wedding/${img}`} />)}
      </Container>
    </section>
  </Layout>
)

const styles = {
  section: {
    position: 'relative',
    width: '100%',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: '3rem',
    color: colors.orange.darker
  },
  link: {
    textDecoration: 'underline'
  },
  image: {
    width: '100%'
  }
}

export default Images
