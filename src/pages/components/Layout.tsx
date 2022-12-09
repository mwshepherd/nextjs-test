import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
