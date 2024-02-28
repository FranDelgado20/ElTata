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
      <Row className=" mx-0 ">
        <Col lg={12} className=" flex justify-center  ">
          <div>
            <Link to={"/"}>
              <img src="logobg.png" alt="" className="w-44 iconos " />
            </Link>
          </div>
        </Col>
        <Col lg={12}>
          <div className="flex w-full flex-col items-center justify-center  border-t border-blue-gray-50 py-4 ">
            <Typography
              variant="small"
              className=" font-normal  text-center md:mb-0  "
            >
              &copy; {} El Tata. All Rights Reserved.
            </Typography>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterComp;
