import React, { useEffect, useState } from "react";
import { Table, Form, Input, Select } from "antd";

import { useGetAllUsersQuery,useUpdateUserMutation,useDeleteUserMutation } from '../../services/user/user.service'

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";
import { toast, ToastContainer } from "react-toastify";
export const UserDataTable = () => {
    const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState("");

    const { data, isError, isFetching, isLoading, isSuccess, error } = useGetAllUsersQuery()
    const allUsers = data?.data
    const [
        updateUser,
        {
          data: updatedData,
          isError: isUpdateError,
          isLoading: isUpdateLoading,
          isSuccess: isUpdateSuccess,
          error: updateError,
        },
      ] = useUpdateUserMutation();
      const [
        deleteUser,
        {
          data: deletedData,
          isError: isDeleteError,
          isLoading: isDeleteLoading,
          isSuccess: isDeleteSuccess,
          error: deleteError,
        },
      ] = useDeleteUserMutation();
    
      const [form] = Form.useForm();
    
      const { Option } = Select;
    
      const { TextArea } = Input;
    
      console.log("deletedData: ", deletedData)

      // toast charity edite message
      useEffect(() => {
        if (isUpdateSuccess && updatedData) {
          toast.success("User Updated successfully!");
          setTimeout(() => {
            setEditModalVisible(false);
          }, 2000);
        }
        return () => {
          setUserData({});
        };
      }, [isUpdateSuccess]);
    
      // toast charity delete message
      useEffect(() => {
        if (isDeleteSuccess && deletedData) {
          toast.success("User Deleted successfully!");
          setTimeout(() => {
            setDeleteModalVisible(false);
          }, 2000);
        }
      }, [isDeleteSuccess]);
    
      // set modals visible
      const showEditModal = (record) => {
        form.setFieldsValue(record);
        setEditModalVisible(true);
        setUserData(record);
      };
    
      const cancelEditModal = () => {
        setEditModalVisible(false);
      };
    
      const showDeleteModal = (record) => {
        setDeleteModalVisible(true);
        const id = record._id;
        setUserId(id);
      };
    
      const cancelDeleteModal = () => {
        setDeleteModalVisible(false);
      };
    
      const handleUserSubmit = (values) => {
        const id = userData._id;
        const body = {
          ...values,
          id,
        };
    
        updateUser(body);
      };
    
      const handleUserSubmitFailed = (errors) => {
        console.log("errors: ", errors);
      };
    
      const handleUserDelete = () => {
        deleteUser({ userId });
      };


    const columns = [
        {
            key: "userName",
            title: "Username",
            dataIndex: "username"
        },
        {
            key: "email",
            title: "Email",
            dataIndex: "email"
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
            key: "noOfDonation",
            title: "Donation",
            dataIndex: "noOfDonation"
        },
        {
            key: "totalDonations",
            title: "Total",
            dataIndex: "totalDonations"
        },
       
        {
            key: "phone",
            title: "Phone",
            dataIndex: "phone"
        },
        {
            key: "address",
            title: "Address",
            dataIndex: "address"
        },

        {
            key: "role",
            title: "Role",
            dataIndex: "role"
        },
        {
            key: "_id",
            title: "Action",
            render: (text, record) => (
              <div className="flex items-center justify-center">
                <AiFillEdit
                  className="mx-3 w-5 h-5 cursor-pointer"
                  onClick={() => showEditModal(record)}
                />
                <AiFillDelete
                  className="mx-2 text-red-800 w-4 h-4 cursor-pointer"
                  onClick={() => showDeleteModal(record)}
                />
              </div>
            ),
          },
        
      
    ]





    return (
        <div className='flex flex-col'>
              <ToastContainer />
              {editModalVisible && (
        <EditModal
          visible={editModalVisible}
          handleOk={form.submit}
          handleCancel={cancelEditModal}
          loading={isUpdateLoading}
          title="Edit User"
        >
          {isUpdateError && (
            <div className="flex mt-3">
              <p className="text-red-500 text-md font-bold mx-3">
                {updateError?.name || updateError?.status}
              </p>
              <p className="text-red-500 text-md font-bold">
                {updateError?.message || updateError?.data.message}
              </p>
            </div>
         )}
           <Form
                        form={form}
                        initialValues={{
                            active: userData?.active
                        }}
                        onFinish={handleUserSubmit}
                        onFinishFailed={handleUserSubmitFailed}
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
                                <Option value="Active">Active</Option>
                                <Option value="pending">pending</Option>
                               
                            </Select>

                        </Form.Item>

                    </Form>

                </EditModal>
           ) }
            {
                deleteModalVisible &&
                <DeleteModal
                    visible={deleteModalVisible}
                    title="Delete User"
                    handleOk={handleUserDelete}
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
                        Do you want to delete this user
                    </div>
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
                dataSource={allUsers} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}
