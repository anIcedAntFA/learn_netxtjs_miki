export function AdminLayout({ children }) {
  return (
    <div>
      <h1>Admin Layout</h1>

      <Header />
      <Sidebar />
      <Footer />

      <div>{children}</div>
    </div>
  );
}
