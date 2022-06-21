import { Table } from 'antd'
import React, { useState, useEffect } from 'react'

import charityLogo from '../../assets/img/icon.png'
import { LoadingOutlined } from '@ant-design/icons';
import { useGetAllCharitiesQuery } from '../../services/charity/charity.service';
import { useGetAllDonationsQuery } from '../../services/donation/donation_service';
import { useGetAllFundraisessQuery } from '../../services/fundraise/fundraise.service';
import { useGetAllEventsQuery } from '../../services/events/events_service';

import { useGetAllUsersQuery } from '../../services/user/user.service'


import { Spin } from 'antd';
import '../dashboard/dashboard.css'


const GenerateReport = () => {



    const [totalUsers, setTotalUsers] = useState(0)
    const [totalCharity, setTotalCharity] = useState(0)
    const [totalDonation, setTotalDonation] = useState(0)
    const [totalFundRaising, setTotalFundRaising] = useState(0)
    const [totalEvent, setTotalEvent] = useState(0)

    const [generatingPdf, setGeneratingPdf] = useState(false)

    // get all users
    const { data, isError, isFetching, isLoading, isSuccess, error } = useGetAllUsersQuery()
    const allUsers = data?.data


    // get all charities

    const { data: charityData, isError: isCharityError, isFetching: isCHarityFetching, isLoading: isCharityLoading, isSuccess: isCharitySuccess, error: charityError } = useGetAllCharitiesQuery();
    const allCharities = charityData?.data


    // get all donations

    const { data: donationData, isError: isDonationError, isFetching: isDonationFetching, isLoading: isDonationLoading, isSuccess: isDonationSuccess, error: donationError } = useGetAllDonationsQuery();
    const allDonations = donationData?.data

    // get all fundraisings
    const { data: fundData, isError: isFundError, isFetching: isFundFetching, isLoading: isFundLoading, isSuccess: isFundSuccess, error: fundError } = useGetAllFundraisessQuery();
    const allFundrasings = fundData?.data


    // get all events

    const { data: eventData, isError: isEventError, isFetching: isEventFetching, isLoading: isEventLoading, isSuccess: isEventSuccess, error: eventError } = useGetAllEventsQuery();
    const allEvents = eventData?.data



    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;



    useEffect(() => {
        if (isSuccess && data) {
            setTotalUsers(allUsers.length)
        }
        if (isCharitySuccess && charityData) {
            setTotalCharity(allCharities.length)
        }

        if (isDonationSuccess && donationData) {
            setTotalDonation(allDonations.length)
        }
        if (isFundSuccess && fundData) {
            setTotalFundRaising(allFundrasings.length)
        }
        if (isEventSuccess && eventData) {
            setTotalEvent(allEvents.length)
        }
    }, [isSuccess, isCharitySuccess, isDonationSuccess, isFundSuccess, isEventSuccess])


    return (
        <div className='flex flex-col'>
            <div className='flex flex-col relative items-center justify-center w-full'>
                <div className='w-1/5 py-5 absolute right-0 top-5'>
                    <p>Date: __________________</p>
                </div>
                <div className='w-2/3 flex flex-col items-center justify-center p-5 mt-24'>
                    <h1 className='text-3xl font-bold'>Charity Management Report</h1>
                    <img src={charityLogo} alt='watch dog logo' className='w-36 h-24' />
                </div>

                <div className='w-4/5 flex items-center justify-center'>
                    <p className='text-center'>
                        Charity Management team has collected the information based on the system. The data shows
                        the number of users directly participated on the fundraising and the amount of money collected
                        through the system. We approve that the provided data is correct has amazing integrity. We gave our
                        best to successfully combine, arrange and analyze the following data.
                    </p>
                </div>
              

                <div>
                    <div className="grid grid:cols-1 lg:grid-cols-3 2xlgrid-cols-4 justify-between mt-4 gap-10">
                        {
                            isDonationError &&
                            <div className='flex mt-3'>
                                <p className='text-red-500 text-md font-bold mx-3'>
                                    {donationError?.name || donationError?.status}
                                </p>
                                <p className='text-red-500 text-md font-bold'>
                                    {donationError?.message || donationError?.data.message}
                                </p>
                            </div>
                        }
                        <div className="bg-white w-full rounded-xl shadow-lg flex items-center justify-around">
                            <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
                            <div className="text-center">
                                {
                                    isLoading || isFetching ? (<Spin indicator={antIcon} />) : (
                                        <h1 className="text-4xl font-bold text-gray-800">{totalUsers}</h1>
                                    )
                                }

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
                                {
                                    isCharityLoading || isCHarityFetching ? (<Spin indicator={antIcon} />) : (
                                        <h1 className="text-4xl font-bold text-gray-800">{totalCharity}</h1>
                                    )
                                }
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
                                {
                                    isDonationLoading || isDonationFetching ? (<Spin indicator={antIcon} />) : (
                                        <h1 className="text-4xl font-bold text-gray-800">{totalDonation}</h1>
                                    )
                                }
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
                                {
                                    isFundLoading || isFundFetching ? (<Spin indicator={antIcon} />) : (
                                        <h1 className="text-4xl font-bold text-gray-800">{totalFundRaising}</h1>
                                    )
                                }
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
                                {
                                    isEventLoading || isEventFetching ? (<Spin indicator={antIcon} />) : (
                                        <h1 className="text-4xl font-bold text-gray-800">{totalEvent}</h1>
                                    )
                                }
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


            </div>

            <div className='my-10 w-full flex items-center justify-end'>
                <div className='w-1/5 flex flex-col text-right pr-10'>
                    <p>_______________________________</p>
                    <p className='-mt-4'>Director Signature</p>
                </div>
            </div>
        </div>
    )
}

export default GenerateReport