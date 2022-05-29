import { Table } from 'antd'
import React from 'react'
import { useGetAllTasksQuery } from '../../services/task/task_service'

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
            title: "AssignAt",
            dataIndex: "assignedAt"
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
            dataSource={allTasks} 
            columns={columns} 
            pagination={true} 
            loading={isLoading}
            rowKey="id" />
        </div>

    </div>
)

}
