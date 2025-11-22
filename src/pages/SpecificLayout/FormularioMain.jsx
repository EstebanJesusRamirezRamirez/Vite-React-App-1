import OrderForm from "/src/components/OrderForm";

function FormularioMain() {
  const handleFormSubmit = (data) => {
    // ejemplo: redirigir, guardar en servidor, o mostrar confirmación
    console.log("Pedido recibido:", data);
    // puede usar fetch(...) para enviar a una API
    alert("Pedido recibido. Revisa la consola o implementa envío a servidor.");
  };

  return (
    <>
      <main
        style={{ backgroundColor: "#bf7a9b" }}
        className="px-[10%] py-[40px]"
      >
        <div className="container">
          <div className="row">
            <OrderForm onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </main>
    </>
  );
}

export default FormularioMain;
