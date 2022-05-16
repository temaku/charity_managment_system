import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks/redux_hooks";
import { backendImageServer } from "../../app/services";
import { usersSelector } from "../../app/store/features/users/usersSlice";

type Props = {};

const UsersTable = (props: Props) => {
  const [show, setShow] = useState<number | null>(0);
  const [selectedUserId, setSelectedUserId] = useState("");
  const {searchUsersList, users} = useAppSelector(usersSelector)

  
  // const [users, setUsers] = useState([
  //   {
  //     id: "23243234234234",
  //     fullName: "John Doe",
  //     email: "email@email.com",
  //     phone: "1234567890",
  //     isActive: true,
  //     avatar: "https://cdn.tuk.dev/assets/templates/olympus/projects(3).png",
  //     subType: {
  //       subscriptionType: "free",
  //       subscriptionId: "free-subscription",
  //       summary: "Free Subscription",
  //       price: 0,
  //     },
  //     address: {
  //       country: "Ethiopia",
  //       city: "Addis Ababa",
  //       street: "Kenya",
  //       zip: "12345",
  //     },
  //     createdAt: "2020-01-01",
  //   },
  //   {
  //     id: "322323234",
  //     fullName: "Jane Doe",
  //     email: "email@email.com",
  //     phone: "1234567890",
  //     isActive: true,
  //     avatar: "https://cdn.tuk.dev/assets/templates/olympus/projects(1).png",
  //     address: {
  //       country: "USA",
  //       city: "New York",
  //       street: "123 Main St",
  //       zip: "12345",
  //     },
  //     subType: {
  //       subscriptionType: "free",
  //       subscriptionId: "free-subscription",
  //       summary: "Free Subscription",
  //       price: 0,
  //     },
  //     createdAt: "2020-01-01",
  //   },
  //   {
  //     id: "wef3232423423423",
  //     fullName: "Thomas Doe",
  //     email: "email@email.com",
  //     phone: "1234567890",
  //     isActive: true,
  //     avatar: "https://cdn.tuk.dev/assets/templates/olympus/projects(2).png",
  //     address: {
  //       country: "UK",
  //       city: "London",
  //       street: "123 Main St",
  //       zip: "12345",
  //     },
  //     subType: {
  //       subscriptionType: "free",
  //       subscriptionId: "free-subscription",
  //       summary: "Free Subscription",
  //       price: 0,
  //     },
  //     createdAt: "2020-01-01",
  //   },
  // ]);

  return (
    <>
      <div className="w-full">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Users
            </p>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Username</th>
                <th className="font-normal text-left pl-12">Email</th>
                <th className="font-normal text-left pl-12">CountDonations</th>
                <th className="font-normal text-left pl-20">TotalDonations</th>
                <th className="font-normal text-left pl-20">Phone </th>
                <th className="font-normal text-left pl-20">Status</th>
                <th className="font-normal text-left pl-16">Address</th>
                <th className="font-normal text-left pl-20">CreatedAt</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {users.length > 0 &&
                users.map((user, index) => {
                  return (
                    <tr
                      key={user.id}
                      className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100"
                    >
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-10 h-10">
                            <img className="w-full h-full" src={`${backendImageServer}/users/${user.photo}`} alt={user.fullName} />
                          </div>
                          <div className="pl-4">
                            <p className="font-medium">{user.username}</p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-12">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {user.email}
                        </p>
                        <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                          <div className="w-6 h-3 bg-green-progress rounded-full" />
                        </div>
                      </td>
                      <td className="pl-12">
                        <p className="font-medium">{user.noOfDonation }</p>
                      </td>
                      
                      <td className="pl-20">
                        <p className="font-medium">
                          {user.totalDonations}
                        </p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium">
                          {user.phone}
                        </p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium">
                          false
                          

                        </p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium">
                          {user.address}
                        </p>
                      </td>

                      <td className="px-7 2xl:px-0">
                        {false ? (
                          <button
                            onClick={() => setSelectedUserId(user.id)}
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
                            onClick={() => setSelectedUserId("")}
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
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
