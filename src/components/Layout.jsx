import Navbar from "./Navbar";

const Layout = ({ children, isNavOpen, setIsNavOpen }) => {
  return (
    <>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
