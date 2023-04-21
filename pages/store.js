import Store from '@/components/Store'
import Footer from '../components/Footer'
import styles from '../styles/servicePage.module.css'

const store = () => {
  return (
    <div>
      <Store />
      <div className={styles.footer}>
      <Footer />
      </div>
    </div>
  )
}

export default store