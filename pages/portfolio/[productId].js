import styles from '../../styles/Home.module.css'

import { useRouter } from 'next/router'

export default function PortfolioProductsPages() {

  const router = useRouter();

  console.log(router.pathname);

  console.log(router.query);

  return (
    <div className={styles.container}>
      <div>
        <h1>Portfolio  products pages</h1>
      </div>
    </div>
  )
}
