import { Table } from 'antd'
import React from 'react'
import {  useGetAllDonationsQuery } from '../../services/donation/donation_service'
export const DonationDataTable = () => {
    const { data, isError, isFetching, isLoading, isSuccess, error } =   useGetAllDonationsQuery();
    const allDonations = data?.data
    console.log("allDonations : ", allDonations )
   

    const columns = [
        {
            key: "phone",
            title: "Phone",
            dataIndex: "phone"
        },
        {
            key: "DonationOption",
            title: "Payment Type",
            dataIndex: "DonationOption"
        },
        {
            key: "status",
            title: "Status",
            dataIndex: "status"
        },
        {
            key: "donate",
            title: "Amount",
            dataIndex: "donate"
        },
       
        {
            key: "donatedAt",
            title: "donated At",
            dataIndex: "donatedAt"
        },
       
    ]

    return (
        <div className='flex flex-col'>

            {
                isError &&
                <div className='flex mt-3'>
                    <p className='text-red-500 text-md font-bold mx-3'>
                        {error?.name || error?.status}
                    </p>
                    <p className='text-red-500 text-md font-bold'>
                        {error?.message || error?.data.message}
                    </p>
                </div>
            }

            <div className='mt-8'>
                <Table 
                dataSource={allDonations} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}
