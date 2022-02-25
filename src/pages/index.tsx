// import { GetServerSideProps } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  }
}

// Client-Side Rendering -> quando não é preciso de indexação, quando é uma informação carregada através de ação do usuário
// Server-Side Rendering -> quando é necessário utilizar informações do usuário que acessa a página, em tempo real
// Static Site Generation -> casos em que é possível gerar o html de uma página e compartilhá-lo com todos usuários

// exemplo: Post do blog
// Conteúdo do Post -> SSG
// Comentários -> Client-Side Rendering

// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve('price_1JJM0DH3LDGqzEKUaETQxwH8')

//   const product = {
//     priceId: price.id,
//     amount: new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(price.unit_amount / 100),
//   }

//   return {
//     props: {
//       product
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JJM0DH3LDGqzEKUaETQxwH8')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" width="334px" height="520px" />
      </main>
    </>
  )
}
