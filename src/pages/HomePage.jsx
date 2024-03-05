import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Typography, Breadcrumbs } from "@material-tailwind/react";
import Produccion from "../components/Produccion";
import Comentarios from "../components/Comentarios";
import Introduccion from "../components/Introduccion";
import Avisos from "../components/Avisos";
import Horarios from "../components/Horarios";

const HomePage = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
    
      <Container fluid>
        <Horarios/>
        <Avisos/>
        <section className="min-h-screen py-8 px-8 lg:py-28">
          <Introduccion />
        </section>
        <section>
          <Comentarios />
        </section>
        <section>
          {/* <Produccion /> */}
        </section>
        <a href="https://wa.me/3815025234?text=Hola,%20me%20gustaría%20hacer%20un%20pedido"target="_blank" className="btn-wsp">
          <i className="bi bi-whatsapp ms-1 "></i>
        </a>
      </Container>
    </>
  );
};

export default HomePage;
