import Footer from './footer';

export function UserLayout({ children }) {
  return (
    <div>
      <h1>User Layout</h1>

      <div>{children}</div>

      <Footer />
    </div>
  );
}
