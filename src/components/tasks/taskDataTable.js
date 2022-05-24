import { Table } from 'antd'
import React from 'react'

export const TaskDataTable = () => {

    const usersData = [
        {
            id: 1,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        },
        {
            id: 2,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        },
        {
            id: 3,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        },
        {
            id: 4,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        },
        {
            id: 5,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        },
        {
            id: 6,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        },
        {
            id: 7,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        },
        {
            id: 8,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        },
        {
            id: 9,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        },
        {
            id: 10,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        },
        {
            id: 11,
            volunteer:"selam",
            description:"helping the others",
            task:"aged group",
            status:"pending",
            assignedAt: "12-05-2022"
        }
    ]

    const columns = [
        {
            key: "volunteer",
            title: "Volunteer",
            dataIndex: "volunteer"
        },
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

            
            <div className='mt-8'>
                <Table dataSource={usersData} columns={columns} pagination={true} rowKey="id" />
            </div>

        </div>
  )
}
