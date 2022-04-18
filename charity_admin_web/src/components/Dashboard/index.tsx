import React from "react";

type Props = {};

const DashboardComponent = (props: Props) => {
  return (
    <div>
      <div className="grid grid:cols-1 lg:grid-cols-3 2xlgrid-cols-4 justify-between mt-4 gap-10">
        <div className="bg-white w-full rounded-xl shadow-lg flex items-center justify-around">
          <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">534</h1>
            <span className="text-gray-500">Users</span>
          </div>
        </div>
        <div className="bg-white w-full rounded-xl shadow-lg flex items-center justify-around">
          <img
            className="w-20 h-20"
            src="https://cdn.pixabay.com/photo/2019/10/09/17/49/headphones-4537928_960_720.png"
            alt=""
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">3</h1>
            <span className="text-gray-500">Charity</span>
          </div>
        </div>
        <div className="bg-white w-full rounded-xl shadow-lg flex items-center justify-around">
          <img
            className="w-20 h-20"
            src="https://cdn.pixabay.com/photo/2018/12/04/18/04/media-3856203_960_720.png"
            alt=""
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">9.7k</h1>
            <span className="text-gray-500">Donations</span>
          </div>
        </div>
        <div className="bg-white w-full rounded-xl shadow-lg flex items-center justify-around">
          <img
            className="w-20 h-20"
            src="https://cdn.pixabay.com/photo/2017/07/31/16/13/coin-2558676_960_720.jpg"
            alt=""
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">5</h1>
            <span className="text-gray-500">Fundraising</span>
          </div>
        </div>
        <div className="bg-white w-full rounded-xl shadow-lg flex items-center justify-around">
          <img
            className="w-20 h-20"
            src="https://cdn.pixabay.com/photo/2013/04/01/09/18/calendar-98483_960_720.png"
            alt=""
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">10</h1>
            <span className="text-gray-500"> Events</span>
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
