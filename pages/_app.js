import Head from 'next/head'
import '../styles/globals.scss'
import Header from 'components/header'
import Sidebar from 'components/sidebar'

function MyApp({ Component, pageProps }) {
  console.log('MyApp')

  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="description" content="An e-commerce project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Header />
      <div className='page-root'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
