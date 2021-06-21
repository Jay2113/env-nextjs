import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
  return <h1>The value of test is: {process.env.test}</h1>
}

export default MyApp
