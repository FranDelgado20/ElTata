import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { Typography } from "@material-tailwind/react";

const Introduccion = () => {
  return (
    <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <Typography variant="h3" data-aos="zoom-in-down">
                ¡Bienvenidos a El Tata, pionero del sándwich desde 1965!
              </Typography>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9 flex" data-aos="zoom-in-down">
                  <dt className="inline font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 me-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>{" "}
                  <dd className="inline">Entrega rápida y confiable</dd>
                </div>
                <div className="relative pl-9 flex" data-aos="zoom-in-down">
                  <dt className="inline font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 me-1"
                    >
                      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>{" "}
                  <dd className="inline">El mejor precio del mercado</dd>
                </div>
                <div className="relative pl-9 flex" data-aos="zoom-in-down">
                  <dt className="inline font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 me-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </dt>{" "}
                  <dd className="inline">Compromiso con nuestros clientes</dd>
                </div>
                <div className="relative pl-9 flex" data-aos="zoom-in-down">
                  <dt className="inline font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 me-1"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                  </dt>{" "}
                  <dd className="inline">Calidad asegurada en cada sándwich</dd>
                </div>

                <div>
                  <button
                    data-aos="zoom-out-up"
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium btn-wp text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <a
                      href="https://wa.me/3815025234?text=Hola,%20me%20gustaría%20hacer%20un%20pedido"
                      className="no-underline  flex w-full items-center justify-center rounded-md    text-base font-medium btn-wp text-white  "
                    >
                      ¡Pedí el tuyo! <i className="bi bi-whatsapp ms-1 "></i>
                    </a>
                  </button>
                  <div className="relative  flex items-center gap-x-6 overflow-hidden  shadow-2xl  rounded-lg mt-5 bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1" data-aos="zoom-in-up">
                    <div
                      className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                      aria-hidden="true"
                    >
                      <div
                        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ffffff] to-[#ffffff] opacity-30"
                        style={{
                          clipPath:
                            "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
                        }}
                      />
                    </div>
                    <div
                      className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                      aria-hidden="true"
                    >
                      <div
                        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ffffff] to-[#ffffff] opacity-30"
                        style={{
                          clipPath:
                            "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
                        }}
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <p className="text-md  text-center text-dark">
                        <strong className="font-semibold ">
                          Horarios de atención
                        </strong>
                        <br />
                        Lunes a Domingos de 21 a 00:30 horas
                      </p>
                    </div>
                    <div className="flex flex-1 justify-end"></div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div data-aos="zoom-out">
            <img
              src="sanguche2.jpg"
              alt="Product screenshot"
              className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 img-fluid "
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduccion;
