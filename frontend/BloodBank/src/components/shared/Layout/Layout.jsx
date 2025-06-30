import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="d-flex">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="main-content w-100">{children}</div>
      </div>
    </>
  );
};

export default Layout;