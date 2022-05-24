import { Table } from 'antd'
import React from 'react'
import { useGetAllFundraisessQuery } from '../../services/fundraise/fundraise.service'
export const FundraiseDataTable = () => {

    const { data, isError, isFetching, isLoading, isSuccess, error } =  useGetAllFundraisessQuery();
    const allFundrasings = data?.data
    console.log("allFundrasings: ", allFundrasings)
    

    const columns = [
        {
            key: "_id",
            title: "Fundraise Id",
            dataIndex: "_id"
        },
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
            key: "createdAt",
            title: "Date_created",
            dataIndex: "createdAt"
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
                dataSource={allFundrasings} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}
