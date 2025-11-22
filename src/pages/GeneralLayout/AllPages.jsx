import Header from "/src/pages/GeneralLayout/Header";
import Navbar from "/src/pages/GeneralLayout/Navbar";
import Footer from "/src/pages/GeneralLayout/Footer";
import { useState } from "react";

function UpperBody() {
  return (
    <>
      <link
        rel="icon"
        href="/src/assets/img/Header-img/Palazzo-diPizza-Logo-EX1.png"
      ></link>
      <header
        className="p-3"
        style={{ backgroundColor: "rgba(224, 38, 1, 1)" }}
      >
        <Header />
      </header>
      <nav
        style={{ backgroundColor: "rgba(250, 195, 13, 1)" }}
        className="navbar navbar-expand-lg box-shadow-black"
      >
        <Navbar />
      </nav>
    </>
  );
}

function LowerBody({ mainComponent }) {
  return (
    <>
      {mainComponent}
      <footer
        style={{
          backgroundColor: "rgb(206, 126, 51)",
          paddingLeft: "10%",
          paddingRight: "10%",
          fontFamily: "Jumble",
        }}
        className="pt-3 pb-5 box-shadow-black"
      >
        <Footer />
      </footer>
    </>
  );
}

function FullBody({ mainComponent } = null) {
  return (
    <>
      <UpperBody />
      <LowerBody mainComponent={mainComponent} />
    </>
  );
}

export default FullBody;
