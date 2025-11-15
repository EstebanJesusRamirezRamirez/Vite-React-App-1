import {
  ArrayIterator,
  FacebookImgSrcHover,
  RappiImgSrcHover,
} from "./Utilities";
import { FooterPagesA, FooterPagesB } from "./Arrays";

function FooterTop() {
  return (
    <div className="container">
      <div className="footer-top">
        <ArrayIterator items={FooterPagesA} />
        <br />
        <ArrayIterator items={FooterPagesB} />
      </div>
    </div>
  );
}
function FooterMiddle() {
  return (
    <div className="mb-4">
      <a href="https://www.facebook.com/palazzodipizzaservidor/">
        <FacebookImgSrcHover />
      </a>
      <a href="https://www.rappi.com.mx/restaurantes/1930023571-palazzo-di-pizza">
        <RappiImgSrcHover />
      </a>
    </div>
  );
}
function FooterBottom() {
  return (
    <div className="text-justify" style={{ fontSize: "20px" }}>
      <p>
        Nuestras tiendas están abiertas de Lunes a Domingo, generalmente de 2:00
        p.m. a 9:00 p.m. en la mayoría de nuestras localizaciones; para más
        información, ponte en contacto con tu tienda más cercana. Precios y/o
        romociones varían por tienda y están sujetos a cambio sin previo aviso.
        Aunque todas nuestras entregas son gratis, no se penaliza a nuestros
        repartidores por entrega tardía.
      </p>
      <p>
        ¿Estás buscando pizza para entrega a domicilio o recoger en tienda? Deja
        que Palazzo diPizza llene ese espacio especial en tu corazón. Puede que
        suene rídiculo, pero queremos ser tu restaurante de pizza preferido. Nos
        encanta entregarle a nuestros fans las mejores promociones de pizza que
        tenemos que ofrecer.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </>
  );
}

export default Footer;
