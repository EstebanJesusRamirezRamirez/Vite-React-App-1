import { useState } from "react";

function FormularioSubmit({ onFormSubmit }) {
  const [formData, setFormData] = useState(
    {
      nombre: "",
      Email: "",
      TipoPase: "",
      AceptarTerminis: "",
      Comentarios: "",
    }
    //     Nombre (texto, requerido)
    // Correo (texto con @, requerido)
    // Tipo de pase (radio: General / VIP, requerido)
    // Acepto términos (checkbox, requerido)
    // Comentarios (textarea máx. 120 caracteres, opcional)
  );
  const [errors, setErrors] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // const validateErrors () => {}
  };
}
