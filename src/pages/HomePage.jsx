import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Typography, Breadcrumbs } from "@material-tailwind/react";
import Produccion from "../components/Produccion";
import Comentarios from "../components/Comentarios";
import Introduccion from "../components/Introduccion";

const HomePage = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Container fluid>
        <section className="min-h-screen py-8 px-8 lg:py-28">
          <Introduccion/>
        </section>
        <section>
          <Comentarios/>
        </section>
      <section>
    <Produccion/>
      </section>
      
       
      </Container>
    </>
  );
};

export default HomePage;
