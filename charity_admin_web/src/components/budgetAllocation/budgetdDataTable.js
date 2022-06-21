import React, { useEffect, useState } from "react";
import { Table, Form, Input, Select } from "antd";
import {  useGetAllBudgetsQuery,useUpdateBudgetMutation,useDeleteBudgetMutation } from '../../services/budget/budget_service'

import { format } from "timeago.js";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";
import { toast, ToastContainer } from "react-toastify";
export const BudgetDataTable = () => {
    const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [budgetData, setBudgetData] = useState({});
  const [budgetId, setBudgetId] = useState("");
    
    const { data, isError, isFetching, isLoading, isSuccess, error } =  useGetAllBudgetsQuery();
    const allBudgets = data?.data
    console.log("allBudgets: ", allBudgets)

    const [
        updateBudget,
        {
          data: updatedData,
          isError: isUpdateError,
          isLoading: isUpdateLoading,
          isSuccess: isUpdateSuccess,
          error: updateError,
        },
      ] = useUpdateBudgetMutation();
      const [
        deleteBudget,
        {
          data: deletedData,
          isError: isDeleteError,
          isLoading: isDeleteLoading,
          isSuccess: isDeleteSuccess,
          error: deleteError,
        },
      ] = useDeleteBudgetMutation();
    
      const [form] = Form.useForm();
    
      const { Option } = Select;
    
      const { TextArea } = Input;
    
      // toast charity edite message
      useEffect(() => {
        if (isUpdateSuccess && updatedData) {
          toast.success("Budget Updated successfully!");
          setTimeout(() => {
            setEditModalVisible(false);
          }, 2000);
        }
        return () => {
          setBudgetData({});
        };
      }, [isUpdateSuccess]);
    
      // toast charity delete message
      useEffect(() => {
        if (isDeleteSuccess && deletedData) {
          toast.success("Budget Deleted successfully!");
          setTimeout(() => {
            setDeleteModalVisible(false);
          }, 2000);
        }
      }, [isDeleteSuccess]);
    
      // set modals visible
      const showEditModal = (record) => {
        form.setFieldsValue(record);
        setEditModalVisible(true);
        setBudgetData(record);
      };
    
      const cancelEditModal = () => {
        setEditModalVisible(false);
      };
    
      const showDeleteModal = (record) => {
        setDeleteModalVisible(true);
        const id = record._id;
        setBudgetId(id);
      };
    
      const cancelDeleteModal = () => {
        setDeleteModalVisible(false);
      };
    
      const handleBudgetSubmit = (values) => {
        const id = budgetData._id;
        const body = {
          ...values,
          id,
        };
    
        updateBudget(body);
      };
    
      const handleBudgetSubmitFailed = (errors) => {
        console.log("errors: ", errors);
      };
    
      const handleBudgetDelete = () => {
        deleteBudget({ budgetId });
      };

    const columns = [

        {
            key: "reason",
            title: "Reason",
            dataIndex: "reason"
        },
        {
            key: "description",
            title: "Description",
            dataIndex: "description"
        },
        {
            key: "charity",
            title: "Charity",
            dataIndex: "charity"
        },
        {
            key: "amount",
            title: "Amount",
            dataIndex: "amount"
        },
        {
            key: "currentAmount",
            title: "Total",
            dataIndex: "currentAmount"
        },
      
        {
            key: "createdAt",
            title: "Created At",
            dataIndex: "createdAt",
            render:(createdAt) => (
                <>
                {
                    format(createdAt)
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
    title="Edit Budget"
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
            initialValues={budgetData}
            onFinish={handleBudgetSubmit}
            onFinishFailed={handleBudgetSubmitFailed}
            autoComplete="off"
            layout="vertical"
            className=""
          >
            <Form.Item
              label="Reason"
              name="reason"
              rules={[
                {
                  required: true,
                  message: "Please input your name of reason!",
                },
              ]}

            >
              <Input placeholder="Reason of Budget Allocated" />
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
        
            <Form.Item
              label="Amount"
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Please input your amout!",
                },
              ]}
            >
              <Input placeholder="Amount of Budget required" />
            </Form.Item>
            </Form>
            </EditModal>
)}
{deleteModalVisible && (
        <DeleteModal
          visible={deleteModalVisible}
          handleOk={handleBudgetDelete}
          handleCancel={cancelDeleteModal}
          loading={isDeleteLoading}
          title="Delete Budget"
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

          <p>Do you really want to Delete Budget ?</p>
        </DeleteModal>
      )}
  

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
            )}

            <div className='mt-8'>
                <Table 
                dataSource={allBudgets} 
                columns={columns} 
                pagination={true} 
                loading={isLoading}
                rowKey="id" />
            </div>

        </div>
    )
}