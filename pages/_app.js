import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
