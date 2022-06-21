import React, { useState, useEffect } from 'react'
import { Form, Table, Input, Button, Spin, Select } from 'antd'
import { useDeleteDonationMutation, useGetAllDonationsQuery, useUpdateDonationMutation } from '../../services/donation/donation_service'


import moment from 'moment'

import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import EditModal from '../modals/EditModal'
import { toast, ToastContainer } from 'react-toastify'
import DeleteModal from '../modals/DeleteModal'

export const DonationDataTable = () => {

    const [editModalVisible, setEditModalVisible] = useState(false)
    const [deleteModalVisible, setDeleteModalVisible] = useState(false)

    const [loading, setLoading] = useState(false)
    const [donationData, setDonationData] = useState({})
    const [donationId, setDonationId] = useState('')

    const { data, isError, isFetching, isLoading, isSuccess, error } = useGetAllDonationsQuery();
    const allDonations = data?.data

    const [updateDonation, { data: updateData, isError: isUpdateError, isLoading: isUpdateLoading, isSuccess: isUpdateSUccess, error: updateError }] = useUpdateDonationMutation()
    const [deleteDonation, { data: deleteData, isError: isDeleteError, isLoading: isDeleteLoading, isSuccess: isDeleteSUccess, error: deleteError }] = useDeleteDonationMutation()



    const [form] = Form.useForm()

    const { Option } = Select;


    console.log("deletedData: ", deleteData)

    useEffect(() => {
        if (isUpdateSUccess && updateData) {
            toast.success("Donation updated succesfuuly!")
            setEditModalVisible(false)
        }
    }, [isUpdateSUccess])


    useEffect(() => {
        if(isDeleteSUccess && deleteData){
            toast.success("Donation Deleted successfully!")
            setTimeout(() => {
                setDeleteModalVisible(false)
            }, 2000)
        }
        
    },[isDeleteSUccess])


    // set modals visi
    const showEditModal = (record) => {
        form.setFieldsValue(record)
        setEditModalVisible(true)
        setDonationData(record)
    }

    const cancelEditModal = () => {
        setEditModalVisible(false)
    }


    const showDeleteModal = (record) => {
        setDeleteModalVisible(true)
        const id = record._id
        setDonationId(id)
    }

    const cancelDeleteModal = () => {
        setDeleteModalVisible(false)
    }


    const handleDonationSubmit = (values) => {
        const id = donationData._id
        const body = {
            ...values,
            id
        }

        updateDonation(body)
    }

    const handleDonationSubmitFailed = (errors) => {
        console.log("errors: ", errors)
    }

    const handleDonationDelete = () => {
        deleteDonation({donationId})
    }




    const columns = [
        {
            key: "phone",
            title: "Phone",
            dataIndex: "phone"
        },
        {
            key: "DonationOption",
            title: "Payment Type",
            dataIndex: "DonationOption"
        },
        {
            key: "status",
            title: "Status",
            dataIndex: "status",
            render: (status) => (
                <div className='uppercase'>
                    {
                        status === 'pending' ? (
                            <span className='text-red-600'>
                                {
                                    status
                                }
                            </span>
                        ): 
                        (
                            <span className='text-green-800'>
                                {
                                    status
                                }
                            </span>
                        )

                    }
                </div>
            )
        },
        {
            key: "donate",
            title: "Amount",
            dataIndex: "donate"
        },

        {
            key: "donatedAt",
            title: "donated At",
            dataIndex: "donatedAt",
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
            render: (text, record) => (
                <div className='flex items-center justify-center'>
                    <AiFillEdit
                        className='mx-3 w-5 h-5 cursor-pointer'
                        onClick={() => showEditModal(record)}
                    />
                    <AiFillDelete
                        className='mx-2 text-red-800 w-4 h-4 cursor-pointer'
                        onClick={() => showDeleteModal(record)}
                    />
                </div>
            )
        }

    ]

    return (
        <div className='flex flex-col'>

            <ToastContainer />

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


            {/* show modals */}


            {/* first edit modal */}
            {
                editModalVisible &&(
                <EditModal
                    visible={editModalVisible}
                    title="Edit Donation"
                    handleOk={form.submit}
                    loading={isUpdateLoading}
                    handleCancel={cancelEditModal}
                >


                    {
                        isUpdateError &&(
                        <div className='flex mt-3'>
                            <p className='text-red-500 text-md font-bold mx-3'>
                                {updateError?.name || updateError?.status}
                            </p>
                            <p className='text-red-500 text-md font-bold'>
                                {updateError?.message || updateError?.data.message}
                            </p>
                        </div>
                    )}



                    <Form
                        form={form}
                        initialValues={{
                            status: donationData?.status
                        }}
                        onFinish={handleDonationSubmit}
                        onFinishFailed={handleDonationSubmitFailed}
                        autoComplete="off"
                        layout="vertical"
                        className=""
                    >
                        <Form.Item
                            label="Status"
                            name="status"

                        >

                            <Select
                                placeholder="Select status"
                                allowClear >
                                <Option value="pending">PENDING</Option>
                                <Option value="REjected">REJECTED</Option>
                                <Option value="Accepted">ACCEPTED</Option>
                            </Select>

                        </Form.Item>

                    </Form>

                </EditModal>
            )}

            {/* Delete Modal */}

            {
                deleteModalVisible &&(
                <DeleteModal
                    visible={deleteModalVisible}
                    title="Delete Donation"
                    handleOk={handleDonationDelete}
                    loading={isDeleteLoading}
                    handleCancel={cancelDeleteModal}
                >

                    {
                        isDeleteError &&
                        <div className='flex mt-3'>
                            <p className='text-red-500 text-md font-bold mx-3'>
                                {deleteError?.name || deleteError?.status}
                            </p>
                            <p className='text-red-500 text-md font-bold'>
                                {deleteError?.message || deleteError?.data.message}
                            </p>
                        </div>
                    }

                    <div>
                        Do you want to delete this donation
                    </div>
                </DeleteModal>
           ) }
            {
                isError &&(
                <div className='flex mt-3'>
                    <p className='text-red-500 text-md font-bold mx-3'>
                        {error?.name || error?.status}
                    </p>
                    <p className='text-red-500 text-md font-bold'>
                        {error?.message || error?.data.message}
                    </p>
                </div>
           ) }


            <div className='mt-8'>
                <Table
                    dataSource={allDonations}
                    columns={columns}
                    pagination={true}
                    loading={isLoading}
                    rowKey="id" />
            </div>

        </div>
    )
}
