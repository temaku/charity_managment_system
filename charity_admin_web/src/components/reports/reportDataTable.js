import { Table } from 'antd'
import React from 'react'
import {  useGetAllReportsQuery } from '../../services/reports/report_service'
export const ReportDataTable = () => {
    const { data, isError, isFetching, isLoading, isSuccess, error } =   useGetAllReportsQuery();
    const allReports = data?.data
    console.log("allReports : ",allReports )
   

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
            key: "status",
            title: "Status",
            dataIndex: "status"
        },
       
        {
            key: "reportedAt",
            title: "ReportAt",
            dataIndex: "reportedAt"
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
                dataSource={allReports} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}
