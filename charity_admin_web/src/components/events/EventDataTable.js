import { Table } from 'antd'
import React from 'react'
import { useGetAllEventsQuery} from '../../services/events/events_service'

import moment from 'moment'

export const EventDataTable = () => {
    
    const { data, isError, isFetching, isLoading, isSuccess, error } =  useGetAllEventsQuery();
    const allEvents = data?.data
    console.log("allEvents: ", allEvents)
    

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
            key: "date",
            title: "Date",
            dataIndex: "date",
            render: (date) => (
                <>
                {
                    moment(date).format("L")
                }
                </>
            )
        },
        // {
        //     key: "organizer",
        //     title: "Organizer",
        //     dataIndex: "organizer"
        // },
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
                dataSource={allEvents} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}
