import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
