import { Table } from 'antd'
import React from 'react'
<<<<<<< HEAD
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
=======

export const FundraiseDataTable = () => {

    const eventsData = [
        {
            id: 1,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"


        },
        {
            id: 2,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 3,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 4,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 5,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 6,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 7,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 8,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 9,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 10,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 11,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"
        }
    ]

    const columns = [
        {
>>>>>>> fe7008cdac84f8b12ed535f97fc5d1b1b123ad52
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
<<<<<<< HEAD
            key: "createdAt",
            title: "Date_created",
            dataIndex: "createdAt"
=======
            key: "data_created",
            title: "Date_created",
            dataIndex: "data_created"
>>>>>>> fe7008cdac84f8b12ed535f97fc5d1b1b123ad52
        },
       
    ]

    return (
        <div className='flex flex-col'>

<<<<<<< HEAD
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
=======

            <div className='mt-8'>
                <Table dataSource={eventsData} columns={columns} pagination={true} rowKey="id" />
>>>>>>> fe7008cdac84f8b12ed535f97fc5d1b1b123ad52
            </div>

        </div>
    )
}
