import 'tailwindcss/tailwind.css';
import './base.css';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
