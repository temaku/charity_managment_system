import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
      <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
          <div className="mb-10 lg:mb-20"></div>
          <div className="mb-10 md:mb-20 text-gray-600 font-light">
            <h1 className="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">
              404 Not Found
              <br />
            </h1>
            <p>
              The application you are looking for seems to have disappeared.
            </p>
            <p>Go back home and try again.</p>
          </div>
          <div className="mb-20 md:mb-0">
            <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600">
              <Link to={"/dashboard"}>Go back home</Link>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <img
            className="hidden lg:block"
            src="https://i.ibb.co/v30JLYr/Group-192-2.png"
            alt=""
          />
          <img
            className="hidden md:block lg:hidden"
            src="https://i.ibb.co/c1ggfn2/Group-193.png"
            alt=""
          />
          <img
            className="md:hidden"
            src="https://i.ibb.co/8gTVH2Y/Group-198.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
      <div className="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
    </div>
  );
};

export default NotFoundPage;
