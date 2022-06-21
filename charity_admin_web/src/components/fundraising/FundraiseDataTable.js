import React, { useEffect, useState } from "react";
import { Table, Form, Input, Button, Spin, Select } from "antd";
import { useGetAllFundraisessQuery,useUpdateFundraiseMutation,useDeleteFundraiseMutation } from '../../services/fundraise/fundraise.service'


import moment from 'moment'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";
import { toast, ToastContainer } from "react-toastify";

export const FundraiseDataTable = () => {
    const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [fundData, setFundData] = useState({});
  const [fundId, setFundId] = useState("");

    const { data, isError, isFetching, isLoading, isSuccess, error } =  useGetAllFundraisessQuery();
    const allFundrasings = data?.data
    const [
        updateFundraise,
        {
          data: updatedData,
          isError: isUpdateError,
          isLoading: isUpdateLoading,
          isSuccess: isUpdateSuccess,
          error: updateError,
        },
      ] = useUpdateFundraiseMutation();
      const [
        deleteFundraise,
        {
          data: deletedData,
          isError: isDeleteError,
          isLoading: isDeleteLoading,
          isSuccess: isDeleteSuccess,
          error: deleteError,
        },
      ] = useDeleteFundraiseMutation();

      const [form] = Form.useForm();

      const { Option } = Select;
      const { TextArea } = Input;


      useEffect(() => {
        if (isUpdateSuccess && updatedData) {
          toast.success("Fundraise Updated successfully!");
          setTimeout(() => {
            setEditModalVisible(false);
          }, 2000);
        }
        return () => {
          setFundData({});
        };
      }, [isUpdateSuccess]);
    
      // toast charity delete message
      useEffect(() => {
        if (isDeleteSuccess && deletedData) {
          toast.success("Fundraise Deleted successfully!");
          setTimeout(() => {
            setDeleteModalVisible(false);
          }, 2000);
        }
      }, [isDeleteSuccess]);
    
      // set modals visible
      const showEditModal = (record) => {
        form.setFieldsValue(record);
        setEditModalVisible(true);
        setFundData(record);
      };
    
      const cancelEditModal = () => {
        setEditModalVisible(false);
      };
    
      const showDeleteModal = (record) => {
        setDeleteModalVisible(true);
        const id = record._id;
        setFundId(id);
      };
    
      const cancelDeleteModal = () => {
        setDeleteModalVisible(false);
      };
    
      const handleFundraiseSubmit = (values) => {
        const id = fundData._id;
        const body = {
          ...values,
          id,
        };
    
        updateFundraise(body);
      };
    
      const handleFundraiseSubmitFailed = (errors) => {
        console.log("errors: ", errors);
      };
    
      const handleFundraiseDelete = () => {
        console.log("fundraiseID: ", fundId)
        deleteFundraise({ fundId });
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
            key: "amount",
            title: "Amount",
            dataIndex: "amount"
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
          title="Edit Fundraise"
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
        initialValues={fundData}
        onFinish={handleFundraiseSubmit}
        onFinishFailed={handleFundraiseSubmitFailed}
        autoComplete="off"
        layout="vertical"
        className=""
      >
        <Form.Item 
        label="Title"
         name="title"
         rules={[
          {
            required: true,
            message: "Please input your name of Title!",
          },
        ]}
        
        >
          <Input placeholder="Title" />
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
        <TextArea rows={3} />
        </Form.Item>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              message: "Please input your amount!",
            },
          ]}
        >
          <Input  placeholder="Amount" />
        </Form.Item>
        </Form>
        </EditModal>
              )}
               {deleteModalVisible && (
        <DeleteModal
          visible={deleteModalVisible}
          handleOk={handleFundraiseDelete}
          handleCancel={cancelDeleteModal}
          loading={isDeleteLoading}
          title="Delete Fundraise"
        >
          {/* display erros if there is any */}

          {isDeleteError && (
            <div className="flex mt-3">
              <p className="text-red-500 text-md font-bold mx-3">
                {deleteError?.name || deleteError?.status}
              </p>
              <p className="text-red-500 text-md font-bold">
                {deleteError?.message || deleteError?.data.message}
              </p>
            </div>
          )}

          <p>Do you really want to Delete Fundraise ?</p>
        </DeleteModal>
      )}



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
                dataSource={allFundrasings} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}
