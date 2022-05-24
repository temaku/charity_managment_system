import { Table } from 'antd'
import React from 'react'

export const EventDataTable = () => {

    const eventsData = [
        {
            id: 1,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"


        },
        {
            id: 2,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"
        },
        {
            id: 3,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"
        },
        {
            id: 4,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"
        },
        {
            id: 5,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"
        },
        {
            id: 6,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"
        },
        {
            id: 7,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"
        },
        {
            id: 8,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"
        },
        {
            id: 9,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"
        },
        {
            id: 10,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"
        },
        {
            id: 11,
            title:"Helping other",
            description:"this is description",
            date:"2030/04/02",
            organizer:"mekedonia"
        }
    ]

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
            dataIndex: "date"
        },
        {
            key: "organizer",
            title: "Organizer",
            dataIndex: "organizer"
        },
       
    ]

    return (
        <div className='flex flex-col'>


            <div className='mt-8'>
                <Table dataSource={eventsData} columns={columns} pagination={true} rowKey="id" />
            </div>

        </div>
    )
}
