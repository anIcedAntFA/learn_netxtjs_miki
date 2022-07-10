import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';

import MainLayout from '../../components/layouts/main';

PostDetailPage.Layout = MainLayout;

export default function PostDetailPage({ post }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name={post.title} content={post.title} key={post.title} />
        <title>{post.title}</title>
      </Head>

      <div className="flex flex-col items-center">
        <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
          <Link href={`/posts/${post.id}`}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h5>
          </Link>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
        </div>
        <div className="flex mt-8">
          <button className="btn btn-green" type="button" onClick={() => router.replace('/')}>
            Go Home
          </button>
          <button className="btn btn-blue" type="button" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = await getPostIds();
  console.log(paths);

  return {
    paths,
    fallback: false, //* bat ki path nao k returned boi getStaticPaths se toi trang 404
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.postId);

  return {
    props: {
      post,
    },
  };
};

export const getPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=8');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (id) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostIds = async () => {
  const posts = await getPosts();

  return posts.map((post) => ({
    params: {
      postId: `${post.id}`,
    },
  }));
};
