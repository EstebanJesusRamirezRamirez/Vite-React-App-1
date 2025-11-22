import { Link } from "react-router-dom";

const variable1 = "/pedidos";

function Navigation() {
  return (
    <div className="navbar-nav mb-2 mb-lg-0">
      <Link className="text-black no-underline" to={variable1}>
        Hacer Pedido
      </Link>
    </div>
  );
}

function Navbar() {
  return (
    <div
      style={{
        fontFamily: "RobotoSlab",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
      className="container-fluid text-black no-underline"
    >
      <Link
        style={{ fontSize: "25px" }}
        className="text-black no-underline"
        to="/"
      >
        🍕 PalazzoDiPizza
      </Link>
      <Navigation />
    </div>
  );
}

export default Navbar;
