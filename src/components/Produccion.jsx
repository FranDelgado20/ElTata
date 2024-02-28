import { Typography } from "@material-tailwind/react";
import React from "react";
const stats = [
  { id: 1, name: "Transactions every 24 hours", img: "/preferido.png" },
  { id: 2, name: "Assets under holding", img: "/hellmans.png" },
  { id: 3, name: "New users annually", img: "/cocinero.png" },
];

const Produccion = () => {
  return (
    <div className=" py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl text-center text-neutral-900" data-aos="zoom-in-down">
        En El Tata usamos las mejores marcas{" "}
      </h2>
      <hr />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 " data-aos="zoom-out">
        <dl className=" grid-cols-1 gap-x-8 gap-y-16 flex  justify-between align-items-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
            
              <img
                className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                src={stat.img}
              />
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Produccion;
