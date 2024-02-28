import React from "react";
import { Col, Row } from "react-bootstrap";

const Comentarios = () => {
  return (
    <section className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <Row>
        <Col lg={6} sm={12} className="flex justify-start" data-aos="zoom-in-right">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img className="mx-auto w-32 rounded-full" src="logo.png" alt="" />
            <figure className="mt-10">
              <blockquote className="text-start text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  "¡El Tata es mi opción número uno para sándwiches de milanesa
                  en casa! Su milanesa crujiente y fresca llega directamente a
                  mi puerta, haciendo que cada comida sea una experiencia
                  deliciosa y conveniente."
                </p>
              </blockquote>
              <figcaption className="mt-10">
            
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                    Valentina R.
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  ></svg>
                </div>
              </figcaption>
            </figure>
          </div>
        </Col>
        <Col lg={6} sm={12} className="flex justify-center" data-aos="zoom-in">
          <img
            src="sanguche1.jpg"
            className="img-fluid w-96 rounded-lg"
            alt=""
          />
        </Col>
      </Row>
    </section>
  );
};

export default Comentarios;
