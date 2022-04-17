import React from "react";

type Props = {};

const DashboardComponent = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between mt-4 space-x-4 s">
        <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
          <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">534</h1>
            <span className="text-gray-500">Users</span>
          </div>
        </div>
        <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
          <img src="https://i.imgur.com/Qnmqkil.png" alt="" />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">9.7k</h1>
            <span className="text-gray-500">Albums</span>
          </div>
        </div>
        <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
          <img src="https://i.imgur.com/dJeEVcO.png" alt="" />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">50 M</h1>
            <span className="text-gray-500">Total Revenue</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="justify-between rounded-xl mt-4 p-4 bg-white shadow-lg">
          <h1 className="text-xl font-bold text-gray-800 mt-4">
            Today’s Status
          </h1>
          <div className="flex justify-between space-x-4 text-center mt-6">
            <div className="bg-indigo-50 rounded-xl p-10">
              <h3>8.7K</h3>
              <span>Total Present</span>
            </div>
            <div className="bg-indigo-50 rounded-xl p-10">
              <h3>99</h3>
              <span>Registrations</span>
            </div>
            <div className="bg-indigo-50 rounded-xl p-10">
              <h3>30</h3>
              <span>Totals Session</span>
            </div>
          </div>
        </div>
        <div className="justify-between rounded-xl mt-4 p-4 bg-white shadow-lg">
          <h1 className="text-xl font-bold text-gray-800 mt-4">
            Today’s Status
          </h1>
          <div className="flex justify-between space-x-4 text-center mt-6">
            <div className="bg-indigo-50 rounded-xl p-10">
              <h3>8.7K</h3>
              <span>Total Present</span>
            </div>
            <div className="bg-indigo-50 rounded-xl p-10">
              <h3>99</h3>
              <span>Registrations</span>
            </div>
            <div className="bg-indigo-50 rounded-xl p-10">
              <h3>30</h3>
              <span>Totals Session</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
