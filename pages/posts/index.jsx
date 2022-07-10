import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import axios from 'axios';

import MainLayout from '../../components/layouts/main';

PostsPage.Layout = MainLayout;

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a className="text-6xl" href={href} onClick={onClick} ref={ref}>
      Back
    </a>
  );
});

export default function PostsPage({ posts }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="All posts" content="All posts" key="All posts" />
        <title>All Posts</title>
      </Head>
      <div className="flex flex-wrap gap-8 justify-between items-center">
        {posts.map((post) => (
          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
            <Link href={`/posts/${post.id}`}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
            <Link href={`/posts/${post.id}`}>
              <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        ))}
        <button className="btn btn-green" type="button" onClick={() => router.replace('/')}>
          Go Home
        </button>
        <Link href="/" passHref>
          <MyButton />
        </Link>
      </div>
    </>
  );
}

export const getPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=8');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};
