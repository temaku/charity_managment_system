import { Table } from 'antd'
import React from 'react'
import {  useGetAllRegistrationQuery } from '../../services/register_event/register_event_service'
export const RegisterEventDataTable = () => {
    const { data, isError, isFetching, isLoading, isSuccess, error } =   useGetAllRegistrationQuery();
    const allRegistration = data?.data
    console.log("allRegistration : ", allRegistration )
   

    const columns = [
        {
            key: "fullName",
            title: "Username",
            dataIndex: "fullName"
        },
        {
            key: "email",
            title: "Email",
            dataIndex: "email"
        },
        {
            key: "eventId",
            title: "EventId",
            dataIndex: "eventId"
        },
    
        {
            key: "registeredAt",
            title: "RegisteredAt",
            dataIndex: "registeredAt"
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
                dataSource={allRegistration} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}
