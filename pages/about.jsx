import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { MainLayout } from '../components/layouts';

AboutPage.Layout = MainLayout;

export default function AboutPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="about" content="about" key="about" />
        <title>About</title>
      </Head>
      <div>
        <h1>About Page</h1>
        <button className="btn btn-green" type="button" onClick={() => router.replace('/')}>
          Go Home
        </button>
        <button className="btn btn-blue" type="button" onClick={() => router.back()}>
          Go Back
        </button>
      </div>
    </>
  );
}
