import React, { useState } from "react";

type Props = {};

const UsersTable = (props: Props) => {
  const [show, setShow] = useState<number | null>(0);

  return (
    <>
      <div className="w-full">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Users
            </p>
            <div>
              <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  Add User
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Project</th>
                <th className="font-normal text-left pl-12">Progress</th>
                <th className="font-normal text-left pl-12">Tasks</th>
                <th className="font-normal text-left pl-20">Budget</th>
                <th className="font-normal text-left pl-20">Deadline</th>
                <th className="font-normal text-left pl-16">Members</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full"
                        src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">
                        UX Design &amp; Visual Strategy
                      </p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Herman Group
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    72%
                  </p>
                  <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                    <div className="w-20 h-3 bg-green-progress rounded-full" />
                  </div>
                </td>
                <td className="pl-12">
                  <p className="font-medium">32/47</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    5 tasks pending
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">$13,000</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    $4,200 left
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">22.12.21</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    34 days
                  </p>
                </td>
                <td className="pl-16">
                  <div className="flex items-center">
                    <img
                      className="shadow-md w-8 h-8 rounded-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    />
                  </div>
                </td>
                <td className="px-7 2xl:px-0">
                  {show == 0 ? (
                    <button
                      onClick={() => setShow(null)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShow(0)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  {show == 0 && (
                    <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Edit</p>
                      </div>
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full"
                        src="https://cdn.tuk.dev/assets/templates/olympus/projects(1).png"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">Branding</p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Cassin, Bradtke and Jacobson
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    18%
                  </p>
                  <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                    <div className="w-6 h-3 bg-green-progress rounded-full" />
                  </div>
                </td>
                <td className="pl-12">
                  <p className="font-medium">09/47</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    5 tasks pending
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">$13,000</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    $4,200 left
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">22.12.21</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    34 days
                  </p>
                </td>
                <td className="pl-16">
                  <div className="flex items-center">
                    <img
                      className="shadow-md w-8 h-8 rounded-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    />
                  </div>
                </td>
                <td className="px-7 2xl:px-0">
                  {show == 1 ? (
                    <button
                      onClick={() => setShow(null)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShow(1)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  {show == 1 && (
                    <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Edit</p>
                      </div>
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full"
                        src="https://cdn.tuk.dev/assets/templates/olympus/projects(2).png"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">Dev Ops</p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Weissnat Group
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    28%
                  </p>
                  <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                    <div className="w-8 h-3 bg-green-progress rounded-full" />
                  </div>
                </td>
                <td className="pl-12">
                  <p className="font-medium">32/47</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    5 tasks pending
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">$13,000</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    $4,200 left
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">22.12.21</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    34 days
                  </p>
                </td>
                <td className="pl-16">
                  <div className="flex items-center">
                    <img
                      className="shadow-md w-8 h-8 rounded-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    />
                  </div>
                </td>
                <td className="px-7 2xl:px-0">
                  {show == 2 ? (
                    <button
                      onClick={() => setShow(null)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShow(2)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  {show == 2 && (
                    <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Edit</p>
                      </div>
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full"
                        src="https://cdn.tuk.dev/assets/templates/olympus/projects(3).png"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">Backend Services</p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Hoeger - Hirthe
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    94%
                  </p>
                  <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                    <div className="w-24 h-3 bg-green-progress rounded-full" />
                  </div>
                </td>
                <td className="pl-12">
                  <p className="font-medium">32/47</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    5 tasks pending
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">$13,000</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    $4,200 left
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">22.12.21</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    34 days
                  </p>
                </td>
                <td className="pl-16">
                  <div className="flex items-center">
                    <img
                      className="shadow-md w-8 h-8 rounded-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    />
                  </div>
                </td>
                <td className="px-7 2xl:px-0">
                  {show == 3 ? (
                    <button
                      onClick={() => setShow(null)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShow(3)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  {show == 3 && (
                    <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Edit</p>
                      </div>
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full"
                        src="https://cdn.tuk.dev/assets/templates/olympus/projects(4).png"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">UI Design</p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Batz - Yundt
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    81%
                  </p>
                  <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                    <div className="w-20 h-3 bg-green-progress rounded-full" />
                  </div>
                </td>
                <td className="pl-12">
                  <p className="font-medium">32/47</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    5 tasks pending
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">$13,000</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    $4,200 left
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">22.12.21</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    34 days
                  </p>
                </td>
                <td className="pl-16">
                  <div className="flex items-center">
                    <img
                      className="shadow-md w-8 h-8 rounded-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    />
                  </div>
                </td>
                <td className="px-7 2xl:px-0">
                  {show == 4 ? (
                    <button
                      onClick={() => setShow(null)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShow(4)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  {show == 4 && (
                    <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Edit</p>
                      </div>
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full"
                        src="https://cdn.tuk.dev/assets/templates/olympus/projects(5).png"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">UX Strategy</p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Erdman Group
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    37%
                  </p>
                  <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                    <div className="w-14 h-3 bg-green-progress rounded-full" />
                  </div>
                </td>
                <td className="pl-12">
                  <p className="font-medium">32/47</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    5 tasks pending
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">$13,000</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    $4,200 left
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">22.12.21</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    34 days
                  </p>
                </td>
                <td className="pl-16">
                  <div className="flex items-center">
                    <img
                      className="shadow-md w-8 h-8 rounded-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    />
                  </div>
                </td>
                <td className="px-7 2xl:px-0">
                  {show == 5 ? (
                    <button
                      onClick={() => setShow(null)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShow(5)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  {show == 5 && (
                    <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Edit</p>
                      </div>
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full"
                        src="https://cdn.tuk.dev/assets/templates/olympus/projects(6).png"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">Website Development</p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Dickens - Pacocha
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    58%
                  </p>
                  <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                    <div className="w-16 h-3 bg-green-progress rounded-full" />
                  </div>
                </td>
                <td className="pl-12">
                  <p className="font-medium">32/47</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    5 tasks pending
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">$13,000</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    $4,200 left
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">22.12.21</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    34 days
                  </p>
                </td>
                <td className="pl-16">
                  <div className="flex items-center">
                    <img
                      className="shadow-md w-8 h-8 rounded-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    />
                  </div>
                </td>
                <td className="px-7 2xl:px-0">
                  {show == 6 ? (
                    <button
                      onClick={() => setShow(null)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShow(6)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  {show == 6 && (
                    <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Edit</p>
                      </div>
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
              <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full"
                        src="https://cdn.tuk.dev/assets/templates/olympus/projects(7).png"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">Mobile App Development</p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        O'Kon Inc
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    42%
                  </p>
                  <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                    <div className="w-12 h-3 bg-green-progress rounded-full" />
                  </div>
                </td>
                <td className="pl-12">
                  <p className="font-medium">32/47</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    5 tasks pending
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">$13,000</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    $4,200 left
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">22.12.21</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    34 days
                  </p>
                </td>
                <td className="pl-16">
                  <div className="flex items-center">
                    <img
                      className="shadow-md w-8 h-8 rounded-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    />
                    <img
                      className="shadow-md w-8 h-8 rounded-full -ml-2"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    />
                  </div>
                </td>
                <td className="px-7 2xl:px-0">
                  {show == 7 ? (
                    <button
                      onClick={() => setShow(null)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShow(7)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  {show == 7 && (
                    <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Edit</p>
                      </div>
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
