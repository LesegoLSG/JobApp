// Layout.jsx
import React from "react";
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";

//Layout with NavBar and Footer
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {/* Children/page */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
