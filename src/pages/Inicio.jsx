import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Inicio() {
  return (
    <>
      <title>PalazoDiPizza</title>
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
        className="navbar navbar-expand-lg navbar-light box-shadow-black"
      >
        <Navbar />
      </nav>
      <main
        style={{ backgroundColor: "rgba(230, 230, 230, 1)" }}
        className="px-[10%] py-[40px]"
      >
        <Main />
      </main>
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

export default Inicio;
