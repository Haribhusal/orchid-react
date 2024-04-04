import React from "react";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MyNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
