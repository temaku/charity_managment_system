import { Table } from 'antd'
import React from 'react'
import { useGetAllTasksQuery } from '../../services/task/task_service'

import moment from 'moment'

import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

export const TaskDataTable = () => {
    const { data, isError, isFetching, isLoading, isSuccess, error } =  useGetAllTasksQuery();
    const allTasks = data?.data
    console.log("allTasks: ", allTasks)

    

    const columns = [
       
        {
            key: "task",
            title: "Task",
            dataIndex: "task"
        },
        {
            key: "status",
            title: "Status",
            dataIndex: "status"
        },
        {
            key: "description",
            title: "Description",
            dataIndex: "description"
        },
    
        {
            key: "assignedAt",
            title: "Assign At",
            dataIndex: "AssignAt",
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
                   <AiFillEdit className='mx-3 w-5 h-5' />
                   <AiFillDelete  className='mx-2 text-red-800 w-4 h-4'/>
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
            dataSource={allTasks} 
            columns={columns} 
            pagination={true} 
            loading={isLoading}
            rowKey="id" />
        </div>

    </div>
)

}
