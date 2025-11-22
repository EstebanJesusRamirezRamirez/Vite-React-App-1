import FullBody from "/src/pages/GeneralLayout/AllPages";
import InicioMain from "/src/pages/SpecificLayout/InicioMain";

function Inicio() {
  return (
    <>
      <title>PalazoDiPizza</title>
      <FullBody mainComponent={<InicioMain />} />
    </>
  );
}

export default Inicio;
