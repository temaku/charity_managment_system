import { Table } from 'antd'
import React from 'react'
import {   useGetAllFundrasingQuery } from '../../services/fundraise_donation/fundraisedonateService'
export const FundDonationDataTable = () => {
    const { data, isError, isFetching, isLoading, isSuccess, error } =    useGetAllFundrasingQuery();
    const allFundraising = data?.data
   // console.log("allFundraising  : ", allFundraising  )
   

    const columns = [
        {
            key: "username",
            title: "Username",
            dataIndex: "username"
        },
        {
            key: "phone",
            title: "Phone",
            dataIndex: "phone"
        },
        {
            key: "donateOption",
            title: "Payment Type",
            dataIndex: "donateOption"
        },
       
        {
            key: "donate",
            title: "Amount",
            dataIndex: "donate"
        },
       
        {
            key: "fundraisedAt",
            title: "FundraisedAt",
            dataIndex: "fundraisedAt"
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
                dataSource={allFundraising} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}
