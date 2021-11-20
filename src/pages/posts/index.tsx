import Head from 'next/head'

import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>  
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo shjfdgbiusdfg</strong>
            <p>sudfb iusdbfusdbfbs iusdbfjshdbf shdfbjshdbfs dosihdbf so</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo shjfdgbiusdfg</strong>
            <p>sudfb iusdbfusdbfbs iusdbfjshdbf shdfbjshdbfs dosihdbf so</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo shjfdgbiusdfg</strong>
            <p>sudfb iusdbfusdbfbs iusdbfjshdbf shdfbjshdbfs dosihdbf so</p>
          </a>
        </div>
      </main>
    </>
  )
}
