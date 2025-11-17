import { randomArrayValues } from "/src/components/Utilities";
import { PizzaOrders, PizzaPromos } from "/src/components/Arrays";

function ColLeft({ randomPromos = [] }) {
  return (
    <>
      <div
        className="col-9 p-2"
        style={{ backgroundColor: "rgba(200, 3, 3, 1)", borderRadius: "15px" }}
      >
        <img
          className="img-border-black"
          src="src/assets/img/Other-img/Sucursales-y-Contactos.jpg"
          style={{ width: "100%" }}
          alt="Pizza Order"
        />
        <div className="d-flex justify-content-between mt-4">
          <img
            className="img-border-black"
            src={randomPromos?.[0]}
            style={{ width: "31.333%" }}
            alt="Pizza Promo"
          />
          <img
            className="img-border-black"
            src={randomPromos?.[1]}
            style={{ width: "31.333%" }}
            alt="Pizza Promo"
          />
          <img
            className="img-border-black"
            src={randomPromos?.[2]}
            style={{ width: "31.333%" }}
            alt="Pizza Promo"
          />
        </div>
      </div>
    </>
  );
}

function ColRight({ randomOrders = [] }) {
  return (
    <>
      <div
        className="col-3 p-2"
        style={{ backgroundColor: "#bf7a9b", borderRadius: "15px" }}
      >
        <img
          className="img-border-black"
          src={randomOrders?.[0]}
          style={{ width: "100%", marginTop: "29%" }}
          alt="Pizza Order"
        />
        <img
          className="img-border-black"
          src={randomOrders?.[1]}
          style={{ width: "100%", marginTop: "25px" }}
          alt="Pizza Order"
        />
        <img
          className="img-border-black"
          src={randomOrders?.[2]}
          style={{ width: "100%", marginTop: "25px" }}
          alt="Pizza Order"
        />
      </div>
    </>
  );
}
function Main() {
  const randomOrders = randomArrayValues(PizzaOrders, 3);
  const randomPromos = randomArrayValues(PizzaPromos, 3);
  return (
    <>
      <div className="container">
        <div className="row">
          <ColLeft randomPromos={randomPromos} />
          <ColRight randomOrders={randomOrders} />
        </div>
      </div>
    </>
  );
}

export default Main;
