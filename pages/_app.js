import '../styles/globals.css';
import { useState, useEffect, Fragment } from 'react';
import LoadingScreen from '../components/loader/loader';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <Fragment>
          <Component {...pageProps} />
        </Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default MyApp;
