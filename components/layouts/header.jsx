import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <span>
        <Link href={'/'}>
          <a>This is Logo</a>
        </Link>
      </span>
      <nav className="flex gap-36">
        <ul className="navbar__links flex justify-between items-center gap-12">
          <li>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href={'/products'}>
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href={'/posts'}>
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href={'/jokes'}>
              <a>Jokes</a>
            </Link>
          </li>
        </ul>
        <ul className="navbar__actions flex justify-between items-center gap-12">
          <li>
            <Link href="/user/register">
              <a>Sign Up</a>
            </Link>
          </li>
          <li>
            <Link href="/user/login">
              <a>Login</a>
            </Link>
          </li>
          <li className="ml-16">
            <Link href="/cart">
              <a>
                <FaShoppingCart />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
