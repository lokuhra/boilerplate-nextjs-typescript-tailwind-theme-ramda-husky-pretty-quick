import { Inter } from 'next/font/google'
import styles from '../page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    return <main className={styles.main}>About</main>
}
