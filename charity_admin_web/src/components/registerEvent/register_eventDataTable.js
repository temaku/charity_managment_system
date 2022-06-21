import React, { useState, useEffect } from 'react'
import { Form, Table, Input, Button, Spin, Select } from 'antd'

import {  useGetAllRegistrationQuery,useUpdateRegisterEventMutation,useDeleteRegisterEventMutation } from '../../services/register_event/register_event_service'

import moment from 'moment'


import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import EditModal from '../modals/EditModal'
import { toast, ToastContainer } from 'react-toastify'
import DeleteModal from '../modals/DeleteModal'

export const RegisterEventDataTable = () => {


    const { data, isError, isFetching, isLoading, isSuccess, error } =   useGetAllRegistrationQuery();
    const allRegistration = data?.data
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [deleteModalVisible, setDeleteModalVisible] = useState(false)

    const [loading, setLoading] = useState(false)
    const [registerData, setRegisterData] = useState({})
    const [registerId, setRegisterId] = useState('')
    const [updateRegister, { data: updateData, isError: isUpdateError, isLoading: isUpdateLoading, isSuccess: isUpdateSUccess, error: updateError }] = useUpdateRegisterEventMutation()
    const [deleteRegister, { data: deleteData, isError: isDeleteError, isLoading: isDeleteLoading, isSuccess: isDeleteSUccess, error: deleteError }] = useDeleteRegisterEventMutation()
   
    const [form] = Form.useForm()

    const { Option } = Select;
   
    useEffect(() => {
        if (isUpdateSUccess && updateData) {
            toast.success("Event Registration updated succesfuuly!")
            setEditModalVisible(false)
        }
    }, [isUpdateSUccess])


    useEffect(() => {
        if(isDeleteSUccess && deleteData){
            toast.success("Event Registration Deleted successfully!")
            setTimeout(() => {
                setDeleteModalVisible(false)
            }, 2000)
        }
        
    },[isDeleteSUccess])


    // set modals visi
    const showEditModal = (record) => {
        form.setFieldsValue(record)
        setEditModalVisible(true)
        setRegisterData(record)
    }

    const cancelEditModal = () => {
        setEditModalVisible(false)
    }


    const showDeleteModal = (record) => {
        setDeleteModalVisible(true)
        const id = record._id
        setRegisterId(id)
    }

    const cancelDeleteModal = () => {
        setDeleteModalVisible(false)
    }


    const handleEventRegistrationSubmit = (values) => {
        const id =  registerData._id
        const body = {
            ...values,
            id
        }

        updateRegister(body)
    }

    const handleRegisterEventSubmitFailed = (errors) => {
        console.log("errors: ", errors)
    }

    const handleRegisrationDelete = () => {
        deleteRegister({registerId})
    }
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
            key: "registeredAt",
            title: "RegisteredAt",
            dataIndex: "registeredAt",
            render: (registeredAt) => (
                <>
                    {
                        moment(registeredAt).format("YYY-MM-DD")
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
        title="Edit Event Registration"
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
                            status: registerData?.status
                        }}
                        onFinish={handleEventRegistrationSubmit}
                        onFinishFailed={handleRegisterEventSubmitFailed}
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
                    {
                deleteModalVisible &&(
                <DeleteModal
                    visible={deleteModalVisible}
                    title="Delete Event Registration"
                    handleOk={handleRegisrationDelete}
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
                        Do you want to delete this Event Registration
                    </div>
                </DeleteModal>
           ) }



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
