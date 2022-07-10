import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import MainLayout from '../../components/layouts/main';

RandomJokersPage.Layout = MainLayout;

export default function RandomJokersPage({ joke }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="Random jokers" content="Random jokers" key="Random jokers" />
        <title>Random Jokes</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-orange-600 font-bold text-3xl mb-16">Random Jokes</h1>
        <div className="block mb-16 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {joke.setup}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{joke.delivery}</p>
        </div>
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

export const getRandomJoke = async () => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getServerSideProps = async () => {
  const joke = await getRandomJoke();

  return {
    props: {
      joke: {
        setup: `${joke.setup}`,
        delivery: `${joke.delivery}`,
      },
    },
  };
};
