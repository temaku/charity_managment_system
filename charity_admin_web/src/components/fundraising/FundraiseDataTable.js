import { Table } from 'antd'
import React from 'react'
import { useGetAllFundraisessQuery } from '../../services/fundraise/fundraise.service'


import moment from 'moment'

export const FundraiseDataTable = () => {

    const { data, isError, isFetching, isLoading, isSuccess, error } =  useGetAllFundraisessQuery();
    const allFundrasings = data?.data
    console.log("allFundrasings: ", allFundrasings)
    

    const columns = [
      
        {
            key: "title",
            title: "Title",
            dataIndex: "title"
        },
        {
            key: "description",
            title: "Description",
            dataIndex: "description"
        },
        {
            key: "amount",
            title: "Amount",
            dataIndex: "amount"
        },
        {
            key: "donatedAt",
            title: "donated At",
            dataIndex: "donatedAt",
            render: (createdAt) => (
                <>
                {
                    moment(createdAt).format("L")
                }
                </>
            )
        },

        {
            key: "_id",
            title: "Action",
            render: () => (
                <div className='flex items-center justify-center'>
                    <p>Edit</p>
                    <p className='mx-3'>Delete</p>
                </div>
            )
        }
       
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
                dataSource={allFundrasings} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}
