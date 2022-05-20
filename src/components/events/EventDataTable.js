import { Table } from 'antd'
import React from 'react'

export const EventDataTable = () => {

    const usersData = [
        {
            id: 1,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        },
        {
            id: 2,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        },
        {
            id: 3,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        },
        {
            id: 4,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        },
        {
            id: 5,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        },
        {
            id: 6,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        },
        {
            id: 7,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        },
        {
            id: 8,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        },
        {
            id: 9,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        },
        {
            id: 10,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        },
        {
            id: 11,
            userName: "John Doe",
            email: "email@address.org",
            countDonations: "$100",
            totalDonations: "$500",
            phone: "0958987458",
            status: "Active",
            address: "Bole, Addis Ababa",
            createdAt: "12-05-2022"
        }
    ]

    const columns = [
        {
            key: "userName",
            title: "User Name",
            dataIndex: "userName"
        },
        {
            key: "email",
            title: "Email",
            dataIndex: "email"
        },
        {
            key: "countDonations",
            title: "Count Donations",
            dataIndex: "countDonations"
        },
        {
            key: "totalDonations",
            title: "Total Donations",
            dataIndex: "totalDonations"
        },
        {
            key: "phone",
            title: "Phone",
            dataIndex: "phone"
        },
        {
            key: "status",
            title: "Status",
            dataIndex: "status",
            render: (status) => (
                <div className='flex'>
                    <p className='text-green-600'>{status}</p>
                </div>
            )
        },
        {
            key: "address",
            title: "Address",
            dataIndex: "address"
        },
        {
            key: "createdAt",
            title: "Cteated At",
            dataIndex: "createdAt"
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
