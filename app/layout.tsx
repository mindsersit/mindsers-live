import '../styles/globals.css'
import Head from 'next/head'
import { PropsWithChildren } from 'react'

function MyApp({ children }: PropsWithChildren) {
  return <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
}

export default MyApp
