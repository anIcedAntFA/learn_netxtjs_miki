import Link from 'next/link';
import { useRouter } from 'next/router';

import { MainLayout } from '../components/layouts';

HomePage.Layout = MainLayout;

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    return router.push({
      pathname: '/posts/[postId]',
      query: { postId: 'my-favorite-posts' },
    });
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <Link
        href={{
          pathname: '/posts/[postId]',
          query: { postId: 'my-favorite-posts' },
        }}
      >
        <a className="text-6xl font-semibold text-pink-600">Favorite Posts</a>
      </Link>
      <div>
        <button className="btn btn-yellow" type="button" onClick={() => router.push('/jokes')}>
          Generate Jokes
        </button>
        <button className="btn btn-blue" type="button" onClick={() => router.back()}>
          Go Back
        </button>
      </div>
    </div>
  );
}
