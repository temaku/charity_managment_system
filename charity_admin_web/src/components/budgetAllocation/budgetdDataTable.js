import { Table } from 'antd'
import React from 'react'
import {  useGetAllBudgetsQuery } from '../../services/budget/budget_service'

export const BudgetDataTable = () => {

    
    const { data, isError, isFetching, isLoading, isSuccess, error } =  useGetAllBudgetsQuery();
    const allBudgets = data?.data
    console.log("allBudgets: ", allBudgets)

    const columns = [

        {
            key: "reason",
            title: "Reason",
            dataIndex: "reason"
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
            key: "currentAmount",
            title: "Total",
            dataIndex: "currentAmount"
        },
      
        {
            key: "createdAt",
            title: "Created At",
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
                dataSource={allBudgets} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}