function LogoImg() {
  return (
    <img
      src="src/assets/img/Header-img/Palazzo-diPizza-Logo-EX2.png"
      style={{
        height: "120px",
        borderRadius: "20px",
        borderWidth: "3px",
        borderStyle: "Solid",
        borderColor: "black",
      }}
      alt="PalazzoDiPizza logo"
    />
  );
}

function Header() {
  return (
    <>
      <div className="flex justify-center">
        <LogoImg />
        <div className="mt-50">
          <p
            className="text-border-black text-white"
            style={{
              fontFamily: "Ravie",
              fontSize: "30px",
              textDecoration: "None",
              marginLeft: "7.5px",
              marginTop: "10%",
            }}
          >
            PalazzoDiPizza{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
