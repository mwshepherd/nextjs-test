import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navigation />
      <main className="flex-1 w-full h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
