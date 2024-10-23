// Layout.jsx
import React from "react";
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
