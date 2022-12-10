import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navigation />
      <main className="px-20 flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
