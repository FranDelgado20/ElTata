import { Col, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
const FooterComp = () => {
  return (
    <footer className=" bg-neutral-900">
      <div className="waves">
        <div className="wave " id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <Row className=" mx-0">
        <Col lg={12} className=" flex justify-center  ">
          <div>
            <Link to={"/"}>
              <img src="logobg.png" alt="" className="w-44 iconos " />
            </Link>
          </div>
        </Col>
        <Col lg={12}>
          <div className="mx-auto  ">
            <div className="mx-auto grid w-full  "></div>
            <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
              <Typography
                variant="small"
                className=" font-normal text-blue-gray-900 md:mb-0  "
              >
                &copy; {} El Tata. All Rights Reserved.
              </Typography>
              <div className="flex gap-4  text-blue-gray-900 sm:justify-center ">
                <a
                  href="https://www.instagram.com/deco_motivo/"
                  target="_blank"
                  className="opacity-80 transition-opacity hover:opacity-100 iconos text-instagram-gradient"
                >
                  <i className="bi bi-instagram  fs-3"></i>
                </a>

                <a
                  href=""
                  className="opacity-80 transition-opacity hover:opacity-100 iconos text-facebook-gradient"
                >
                  <i className="bi bi-facebook fs-3"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterComp;
