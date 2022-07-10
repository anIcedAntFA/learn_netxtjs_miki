import Header from './header';
import Footer from './footer';

export function MainLayout({ children }) {
  return (
    <div className="h-screen">
      <Header />

      <main className="main">{children}</main>

      <Footer />
    </div>
  );
}
