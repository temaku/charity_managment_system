import clsx from "clsx";
import React from "react";
import { Link, Location, useLocation, useParams } from "react-router-dom";
import { WithChildren } from "../../helpers/types";
import Navbar from "../Navbar";

interface LayoutProps extends WithChildren {
  siteId?: string;
}

export default function BaseLayout({ children }: LayoutProps) {
  const location: Location = useLocation();
  const sidebarHandler = () => {};
  const dropdownHandler = () => {};

  const paths = [
    {
      path: "/",
    },
  ];

  return (
    <div className="flex flex-col flex-no-wrap w-full">
      <Navbar />
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Sidebar starts */}

        {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
        <div className="min-h-full w-1/6 flex relative">
          <div className="w-full absolute sm:relative bg-indigo-100 shadow md:h-full flex-col justify-between hidden md:flex">
            <div>
              <ul className="my-5">
                <div className="my-10">
                  <h1 className="text-extrabold text-center text-4xl text-gray-900">
                    Adminstrator
                  </h1>
                </div>
                <Link to={`/dashboard`}>
                  <li
                    className={clsx(
                      "flex w-full justify-between text-gray-600 hover:text-gray-100  hover:bg-indigo-400  cursor-pointer items-center px-8 py-3",

                      location.pathname.includes("/dashboard") &&
                        "text-white bg-indigo-300"
                    )}
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-settings"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      <span className="text-sm  ml-2">Dashboard</span>
                    </div>
                  </li>
                </Link>
                <Link to={`/users`}>
                  <li
                    className={clsx(
                      "flex w-full justify-between text-gray-600 hover:text-gray-100  hover:bg-indigo-400  cursor-pointer items-center px-8 py-3",

                      location.pathname.includes("/users") &&
                        "text-white bg-indigo-300"
                    )}
                  >
                    {" "}
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-puzzle"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                      </svg>
                      <span className="text-sm  ml-2">Users</span>
                    </div>
                  </li>
                </Link>
                <Link to={`/charity`}>
                  <li
                    className={clsx(
                      "flex w-full justify-between text-gray-600 hover:text-gray-100  hover:bg-indigo-400  cursor-pointer items-center px-8 py-3",

                      location.pathname.includes("/abebe") &&
                        "text-white bg-indigo-300"
                    )}
                  >
                    {" "}
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-compass"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 16 10 10 16 8 14 14 8 16" />
                        <circle cx={12} cy={12} r={9} />
                      </svg>
                      <span className="text-sm  ml-2">Charity</span>
                    </div>
                  </li>
                </Link>
                <Link to={`/donation`}>
                  <li
                    className={clsx(
                      "flex w-full justify-between text-gray-600 hover:text-gray-100  hover:bg-indigo-400  cursor-pointer items-center px-8 py-3",

                      location.pathname.includes("/donation") &&
                        "text-white bg-indigo-300"
                    )}
                  >
                    {" "}
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-code"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 8 3 12 7 16" />
                        <polyline points="17 8 21 12 17 16" />
                        <line x1={14} y1={4} x2={10} y2={20} />
                      </svg>
                      <span className="text-sm  ml-2">Donations</span>
                    </div>
                  </li>
                </Link>
                <Link to={`/events`}>
                  <li
                    className={clsx(
                      "flex w-full justify-between text-gray-600 hover:text-gray-100  hover:bg-indigo-400  cursor-pointer items-center px-8 py-3",

                      location.pathname.includes("/events") &&
                        "text-white bg-indigo-300"
                    )}
                  >
                    {" "}
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-puzzle"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                      </svg>
                      <span className="text-sm  ml-2">Events</span>
                    </div>
                  </li>
                </Link>
                <Link to={`/fundrasing`}>
                  <li
                    className={clsx(
                      "flex w-full justify-between text-gray-600 hover:text-gray-100  hover:bg-indigo-400  cursor-pointer items-center px-8 py-3",

                      location.pathname.includes("/fundrasing") &&
                        "text-white bg-indigo-300"
                    )}
                  >
                    {" "}
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-stack"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="12 4 4 8 12 12 20 8 12 4" />
                        <polyline points="4 12 12 16 20 12" />
                        <polyline points="4 16 12 20 20 16" />
                      </svg>
                      <span className="text-sm  ml-2">Fundrasing</span>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="bg-indigo-400 text-white">
              <ul className="w-full flex items-center justify-between ">
                <Link to={`/signin`}>
                  <li
                    className={clsx(
                      "flex w-full gap-x-5 text-white-600 hover:text-gray-100  hover:bg-indigo-400  cursor-pointer items-center px-8 py-3"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-messages"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                      <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                    </svg>
                    <p>Logout</p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div
            className="text-gray-600 visible sm:hidden relative"
            onClick={dropdownHandler}
          >
            <ul className="p-y w-64 border-r bg-indigo-900 absolute rounded left-0 shadow mt-8 sm:mt-16 hidden">
              <li
                className={clsx(
                  "flex w-full justify-between text-gray-600 hover:text-gray-100  hover:bg-indigo-400  cursor-pointer items-center px-8 py-3",

                  location.pathname.includes("/users") &&
                    "text-white bg-indigo-300"
                )}
              >
                {" "}
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-grid"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                  </svg>
                  <span className="text-sm  ml-2">Dashboard</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-100 hover:bg-indigo-400 cursor-pointer items-center px-2 py-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-puzzle"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                  </svg>
                  <span className="text-sm  ml-2">Users</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-100 hover:bg-indigo-400 cursor-pointer items-center px-2 py-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-compass"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                    <circle cx={12} cy={12} r={9} />
                  </svg>
                  <span className="text-sm  ml-2">Charity</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-100 hover:bg-indigo-400 cursor-pointer items-center px-2 py-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-code"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="7 8 3 12 7 16" />
                    <polyline points="17 8 21 12 17 16" />
                    <line x1={14} y1={4} x2={10} y2={20} />
                  </svg>
                  <span className="text-sm  ml-2">Donations</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-100 hover:bg-indigo-400 cursor-pointer items-center  px-2 py-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-puzzle"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                  </svg>
                  <span className="text-sm  ml-2">Donors</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-100 hover:bg-indigo-400 cursor-pointer items-center px-2 py-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-stack"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                  <span className="text-sm  ml-2">Events</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-100 hover:bg-indigo-400 cursor-pointer items-center px-2 py-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-settings"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  <span className="text-sm  ml-2">Settings</span>
                </div>
              </li>
            </ul>
            <svg
              aria-label="Main Menu"
              aria-haspopup="true"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu cursor-pointer"
              width={30}
              height={30}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={4} y1={8} x2={20} y2={8} />
              <line x1={4} y1={16} x2={20} y2={16} />
            </svg>
          </div>
        </div>
        {/* Sidebar ends */}
        <div className="h-full container mx-auto p-4 w-5/6 overflow-auto max-h-[calc(100vh-64px)]">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}
