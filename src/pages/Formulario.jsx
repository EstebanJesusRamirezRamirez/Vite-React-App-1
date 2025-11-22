import FullBody from "/src/pages/GeneralLayout/AllPages";
import FormularioMain from "/src/pages/SpecificLayout/FormularioMain";

function Formulario() {
  return (
    <>
      <title>PalazoDiPizza</title>
      <FullBody mainComponent={<FormularioMain />} />
    </>
  );
}

export default Formulario;
