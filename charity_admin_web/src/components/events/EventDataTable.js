import React, { useState, useEffect } from 'react'
import { Form, Table, Select, Input, DatePicker } from 'antd'
import { useDeleteEventMutation, useGetAllEventsQuery, useUpdateEventMutation } from '../../services/events/events_service'

import moment from 'moment'


import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify'
import DeleteModal from '../modals/DeleteModal'
import EditModal from '../modals/EditModal'

export const EventDataTable = () => {


    const [editModalVisible, setEditModalVisible] = useState(false)
    const [deleteModalVisible, setDeleteModalVisible] = useState(false)

    const [loading, setLoading] = useState(false)
    const [eventData, setEventData] = useState({})
    const [eventId, setEventId] = useState('')
    const [eventDate, setEventDate] = useState(null)
    const [recordSelected, setRecordSelected] = useState(false)


    const { data, isError, isFetching, isLoading, isSuccess, error } = useGetAllEventsQuery();
    const allEvents = data?.data


     // updating and deleting the event
     const [updateEvent, { data: updatedData, isError: isUpdateError,  isLoading: isUpdateLoading, isSuccess: isUpdateSuccess, error: updateError }] = useUpdateEventMutation()
     const [deleteEvent, { data: deletedData, isError: isDeleteError,  isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, error: deleteError }] = useDeleteEventMutation()
     


    const [form] = Form.useForm();

    const { Option } = Select;
    const {TextArea} = Input;



        // toast charity edite message
        useEffect(() => {
            if(isUpdateSuccess && updatedData){
                toast.success("Event Updated successfully!")
                setTimeout(() => {
                    setEditModalVisible(false)
                    form.setFieldsValue('')
                }, 2000)
            }
            return () => {
                setEventData({})
            }
        },[isUpdateSuccess])
    
    
        // toast charity delete message 
        useEffect(() => {
            if(isDeleteSuccess && deletedData){
                toast.success("Event Deleted successfully!")
                setTimeout(() => {
                    setDeleteModalVisible(false)
                }, 2000)
            }
            
        },[isDeleteSuccess])
    

        useEffect(() => {
            form.setFieldsValue({})
        },[recordSelected])



    // set modals visible
    const showEditModal = (record) => {
        form.setFieldsValue(record)
        setEditModalVisible(true)
        setEventData(record)
    }

    const cancelEditModal = () => {
        setEditModalVisible(false)
        setRecordSelected(!recordSelected)
    }



    const showDeleteModal = (record) => {
        setDeleteModalVisible(true)
        const id = record._id
        setEventId(id)
    }

    const cancelDeleteModal = () => {
        setDeleteModalVisible(false)
    }


    const handleEventSubmit = (values) => {
        const id = eventData._id
        const body = {
            ...values,
            date: eventDate,
            id
        }

        updateEvent(body)
    }

    const handleEventSubmitFailed = (errors) => {
        console.log("errors: ", errors)
    }

    const handleCharityDelete = () => {
        deleteEvent({eventId})
    }

    const onDateChange = (date, dateString) => {
        setEventDate(dateString)
      };


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


            {/* Edit Modal */}

            {
                editModalVisible &&
                <EditModal
                    visible={editModalVisible}
                    handleOk={form.submit}
                    handleCancel={cancelEditModal}
                    loading={isUpdateLoading}
                    title="Edit Event"
                    setModalData={setEventData}
                    modalData = {eventData}
                    >


                    {
                        isUpdateError &&
                        <div className='flex mt-3'>
                            <p className='text-red-500 text-md font-bold mx-3'>
                                {updateError?.name || updateError?.status}
                            </p>
                            <p className='text-red-500 text-md font-bold'>
                                {updateError?.message || updateError?.data.message}
                            </p>
                        </div>
                    }

                    <Form
                        form={form}
                        initialValues={eventData}
                        onFinish={handleEventSubmit}
                        onFinishFailed={handleEventSubmitFailed}
                        autoComplete="off"
                        layout="vertical"
                        className=""
                    >
                        <Form.Item
                            label="Title"
                            name="title"
                        >
                            <Input placeholder="title" />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"

                        >
                            <TextArea rows={3} />
                        </Form.Item>

                       
                        <DatePicker onChange={onDateChange}
                            defaultValue={moment(eventData.date)}
                        />
                        
                    </Form>
                </EditModal>
            }

            {/* Delete Modal */}

            {
                deleteModalVisible &&
                <DeleteModal
                    visible={deleteModalVisible}
                    handleOk={handleCharityDelete}
                    handleCancel={cancelDeleteModal}
                    loading={isDeleteLoading}
                    title="Delete Charity">

                    {/* display erros if there is any */}

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

                    <p>Do you really want to Delete charity ?</p>
                </DeleteModal>
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
