import { useState } from "react";

export default function OrderForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "", // Nombre (texto, requerido)
    Email: "", // Email (texto con @, requerido)
    NumTelefono: "", // Número de teléfono (campo de números, 10 caracteres, requerido)
    DirecEntrega: "", // Dirección de entrega (texto, API?,  requerido)
    PuntosRef: "", // Puntos de referencia (textarea, máx. 120 caracteres, opcional)
    AceptarTerms: false, // Acepto términos (checkbox, requerido)
  });

  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const validateErrors = (data) => {
    const e = {};
    if (!data.nombre.trim()) e.nombre = "Nombre es requerido.";
    if (!data.Email.trim()) e.Email = "Email es requerido.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.Email))
      e.Email = "Email inválido.";
    if (!data.NumTelefono.trim()) e.NumTelefono = "Teléfono es requerido.";
    else if (!/^\d{10}$/.test(data.NumTelefono))
      e.NumTelefono = "Teléfono debe tener 10 dígitos numéricos.";
    if (!data.DirecEntrega.trim()) e.DirecEntrega = "Dirección es requerida.";
    if (data.PuntosRef.length > 120)
      e.PuntosRef = "Máximo 120 caracteres en puntos de referencia.";
    if (!data.AceptarTerms) e.AceptarTerms = "Debes aceptar los términos.";
    return e;
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eObj = validateErrors(formData);
    setErrors(eObj);
    if (Object.keys(eObj).length === 0) {
      // If parent provided handler, call it; otherwise save to localStorage
      if (typeof onFormSubmit === "function") {
        onFormSubmit(formData);
      } else {
        const existing = JSON.parse(localStorage.getItem("orders") || "[]");
        existing.push({ ...formData, createdAt: new Date().toISOString() });
        localStorage.setItem("orders", JSON.stringify(existing));
      }
      setSubmitted(true);
      // optionally reset form
      setFormData({
        nombre: "",
        Email: "",
        NumTelefono: "",
        DirecEntrega: "",
        PuntosRef: "",
        AceptarTerms: false,
      });
    }
  };

  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        <h2 className="mb-4">Hacer Pedido</h2>

        {submitted && (
          <div className="alert alert-success" role="alert">
            Pedido enviado correctamente.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              name="nombre"
              className={"form-control" + (errors.nombre ? " is-invalid" : "")}
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            {errors.nombre && (
              <div className="invalid-feedback">{errors.nombre}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="Email"
              type="email"
              className={"form-control" + (errors.Email ? " is-invalid" : "")}
              value={formData.Email}
              onChange={handleChange}
              required
            />
            {errors.Email && (
              <div className="invalid-feedback">{errors.Email}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Número de teléfono</label>
            <input
              name="NumTelefono"
              type="tel"
              className={
                "form-control" + (errors.NumTelefono ? " is-invalid" : "")
              }
              value={formData.NumTelefono}
              onChange={handleChange}
              maxLength={10}
              placeholder="10 dígitos"
              required
            />
            {errors.NumTelefono && (
              <div className="invalid-feedback">{errors.NumTelefono}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Dirección de entrega</label>
            <input
              name="DirecEntrega"
              className={
                "form-control" + (errors.DirecEntrega ? " is-invalid" : "")
              }
              value={formData.DirecEntrega}
              onChange={handleChange}
              required
            />
            {errors.DirecEntrega && (
              <div className="invalid-feedback">{errors.DirecEntrega}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">
              Puntos de referencia (opcional)
            </label>
            <textarea
              name="PuntosRef"
              className={
                "form-control" + (errors.PuntosRef ? " is-invalid" : "")
              }
              value={formData.PuntosRef}
              onChange={handleChange}
              maxLength={120}
              rows={3}
            />
            {errors.PuntosRef && (
              <div className="invalid-feedback">{errors.PuntosRef}</div>
            )}
            <div className="form-text">{formData.PuntosRef.length}/120</div>
          </div>

          <div className="form-check mb-3">
            <input
              name="AceptarTerms"
              type="checkbox"
              className={
                "form-check-input" + (errors.AceptarTerms ? " is-invalid" : "")
              }
              checked={formData.AceptarTerms}
              onChange={handleChange}
              id="aceptarTerms"
              required
            />
            <label className="form-check-label" htmlFor="aceptarTerms">
              Acepto términos y condiciones
            </label>
            {errors.AceptarTerms && (
              <div className="invalid-feedback d-block">
                {errors.AceptarTerms}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar pedido
          </button>
        </form>
      </div>
    </>
  );
}
