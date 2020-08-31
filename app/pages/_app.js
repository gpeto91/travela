import React from 'react'
import Head from 'next/head'
import "react-datepicker/dist/react-datepicker.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Travel A: From anywhere to everywhere</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
