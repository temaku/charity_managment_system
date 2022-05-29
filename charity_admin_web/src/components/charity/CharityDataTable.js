import { Table } from 'antd'
import React from 'react'
import { useGetAllCharitiesQuery } from '../../services/charity/charity.service'

export const CharityDataTable = () => {

    
    const { data, isError, isFetching, isLoading, isSuccess, error } =  useGetAllCharitiesQuery();
    const allCharities = data?.data
    console.log("allCharities: ", allCharities)

    const columns = [

        {
            key: "name",
            title: "Name",
            dataIndex: "name"
        },
        {
            key: "email",
            title: "Email",
            dataIndex: "email"
        },
        {
            key: "address",
            title: "Address",
            dataIndex: "address"
        },
        {
            key: "phone",
            title: "Phone",
            dataIndex: "phone"
        },
        {
            key: "NumOfDonors",
            title: "Donation",
            dataIndex: "NumOfDonors"
        },
        {
            key: "SumofDonations",
            title: "Total",
            dataIndex: "SumofDonations"
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
                dataSource={allCharities} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}