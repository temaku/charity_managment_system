

import React from 'react'
import { Table } from 'antd';

import { useGetAllUsersQuery } from '../../services/user/user.service'

export const UserDataTable = () => {


    const { data, isError, isFetching, isLoading, isSuccess, error } = useGetAllUsersQuery()
    const allUsers = data?.data


    console.log("allUsers: ", allUsers)


    const columns = [
        {
            key: "userName",
            title: "User Name",
            dataIndex: "username"
        },
        {
            key: "email",
            title: "Email",
            dataIndex: "email"
        },
        {
            key: "noOfDonation",
            title: "No of Donation",
            dataIndex: "noOfDonation"
        },
        {
            key: "phone",
            title: "Phone",
            dataIndex: "phone"
        },
        {
            key: "address",
            title: "Address",
            dataIndex: "address"
        },

        {
            key: "role",
            title: "Role",
            dataIndex: "role"
        },
        {
            key: "status",
            title: "Status",
            dataIndex: "status",
            render: (status) => (
                <div>
                    {
                        status ? "ACTIVE" : "INACTIVE"
                    }
                </div>
            )
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
                dataSource={allUsers} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}
