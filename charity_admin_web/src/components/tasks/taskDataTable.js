import React, { useEffect, useState } from 'react'
import { Table, Form, Input, Button, Spin, Select } from 'antd'
import { useGetAllTasksQuery,useUpdateTaskMutation,useDeleteTaskMutation } from '../../services/task/task_service'

import moment from 'moment'

import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import EditModal from '../modals/EditModal'
import DeleteModal from '../modals/DeleteModal'
import { toast, ToastContainer } from 'react-toastify'

export const TaskDataTable = () => {
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [deleteModalVisible, setDeleteModalVisible] = useState(false)
    
    const [loading, setLoading] = useState(false)
    const [taskData, setTaskData] = useState({})
    const [taskId, setTaskId] = useState('')

    const { data, isError, isFetching, isLoading, isSuccess, error } =  useGetAllTasksQuery();
    const allTasks = data?.data
    console.log("allTasks: ", allTasks)
    const [updateTask, { data: updatedData, isError: isUpdateError,  isLoading: isUpdateLoading, isSuccess: isUpdateSuccess, error: updateError }] = useUpdateTaskMutation()
    const [deleteTask, { data: deletedData, isError: isDeleteError,  isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, error: deleteError }] = useDeleteTaskMutation()

    const [form] = Form.useForm();
   
    useEffect(() => {
        if(isUpdateSuccess && updatedData){
            toast.success("Task Updated successfully!")
            setTimeout(() => {
                setEditModalVisible(false)
            }, 2000)
        }
        return () => {
            setTaskData({})
        }
    },[isUpdateSuccess])


    // toast charity delete message 
    useEffect(() => {
        if(isDeleteSuccess && deletedData){
            toast.success("Task Deleted successfully!")
            setTimeout(() => {
                setDeleteModalVisible(false)
            }, 2000)
        }
        
    },[isDeleteSuccess])


    // set modals visible
    const showEditModal = (record) => {
        form.setFieldsValue(record)
        setEditModalVisible(true)
        setTaskData(record)
    }

    const cancelEditModal = () => {
        setEditModalVisible(false)
    }


    const showDeleteModal = (record) => {
        setDeleteModalVisible(true)
        const id = record._id
        setTaskId(id)
    }

    const cancelDeleteModal = () => {
        setDeleteModalVisible(false)
    }


    const handleTaskSubmit = (values) => {
        const id = taskData._id
        const body = {
            ...values,
            id
        }

        updateTask(body)
    }

    const handleTaskSubmitFailed = (errors) => {
        console.log("errors: ", errors)
    }

    const handleTaskDelete = () => {
        deleteTask({taskId})
    }

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
            render: (text,record) => (
                <div className='flex items-center justify-center cursor-pointer'>
                   <AiFillEdit className='mx-3 w-5 h-5' 
                  onClick={() => showEditModal(record)}
                   />
                   <AiFillDelete  className='mx-2 text-red-800 w-4 h-4 cursor-pointer'
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
                editModalVisible &&
                <EditModal
                    visible={editModalVisible}
                    handleOk={form.submit}
                    handleCancel={cancelEditModal}
                    loading={isUpdateLoading}
                    title="Edit Task">


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
       initialValues={taskData}
       onFinish={handleTaskSubmit}
       onFinishFailed={handleTaskSubmitFailed}
       autoComplete="off"
       layout="vertical"
       className=""
      >
        <Form.Item 
        label="VolunteerId"
         name="volunteer"
         rules={[
          {
            required: true,
            message: "Please input your name of Volunteers!",
          },
        ]}
        
        >
          <Input placeholder="VolunteersId" />
        </Form.Item>
        <Form.Item
          label="Task"
          name="task"
          rules={[
            {
              required: true,
              message: "Please input your task!",
            },
          ]}
        >
          <Input placeholder="Task" />
        </Form.Item>
        
        <Form.Item 
        label="Description"
        name="description"
        rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input placeholder="Description" />
        </Form.Item>
        
      </Form>
      </EditModal>
    }
     {
                deleteModalVisible &&
                <DeleteModal
                    visible={deleteModalVisible}
                    handleOk={handleTaskDelete}
                    handleCancel={cancelDeleteModal}
                    loading={isDeleteLoading}
                    title="Delete Task">

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

                    <p>Do you really want to Delete Task ?</p>
                </DeleteModal>
            }
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
