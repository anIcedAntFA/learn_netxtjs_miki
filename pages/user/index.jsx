import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import UserLayout from '../../components/layouts/user';

UserPage.Layout = UserLayout;

export default function UserPage() {
  return (
    <div>
      <h1>Hello All User</h1>
    </div>
  );
}
