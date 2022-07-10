import { RecoilRoot } from 'recoil';
import EmptyLayout from '../components/layouts/empty';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
