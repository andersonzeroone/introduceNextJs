import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hello word</h1>

        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </div >
  )
}
