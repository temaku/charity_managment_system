import React, { useEffect, useState } from "react";
import { Table, Form, Input, Button, Spin, Select } from "antd";
import {
  useGetAllFundrasingQuery,
  useUpdateDonateFundMutation,
  useDeleteDonateFundMutation,
} from "../../services/fundraise_donation/fundraisedonateService";
//import moment from "moment";
import { format } from "timeago.js";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";
import { toast, ToastContainer } from "react-toastify";
export const FundDonationDataTable = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [donationData, setDonationData] = useState({});
  const [donationId, setDonationId] = useState("");
  const { data, isError, isFetching, isLoading, isSuccess, error } =
    useGetAllFundrasingQuery();
  const allFundraising = data?.data;

  // console.log("allFundraising  : ", allFundraising  )
  const [
    updateDonation,
    {
      data: updatedData,
      isError: isUpdateError,
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      error: updateError,
    },
  ] = useUpdateDonateFundMutation();
  const [
    deleteDonation,
    {
      data: deletedData,
      isError: isDeleteError,
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      error: deleteError,
    },
  ] = useDeleteDonateFundMutation();

  const [form] = Form.useForm();

  const { Option } = Select;

  const { TextArea } = Input;
  useEffect(() => {
    if (isUpdateSuccess && updatedData) {
      toast.success("Fundraise Donation Updated successfully!");
      setTimeout(() => {
        setEditModalVisible(false);
      }, 2000);
    }
    return () => {
      setDonationData({});
    };
  }, [isUpdateSuccess]);

  // toast charity delete message
  useEffect(() => {
    if (isDeleteSuccess && deletedData) {
      toast.success("Fundraise Donation Deleted successfully!");
      setTimeout(() => {
        setDeleteModalVisible(false);
      }, 2000);
    }
  }, [isDeleteSuccess]);

  // set modals visible
  const showEditModal = (record) => {
    form.setFieldsValue(record);
    setEditModalVisible(true);
    setDonationData(record);
  };

  const cancelEditModal = () => {
    setEditModalVisible(false);
  };

  const showDeleteModal = (record) => {
    setDeleteModalVisible(true);
    const id = record._id;
    setDonationId(id);
  };

  const cancelDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const handleDonationSubmit = (values) => {
    const id = donationData._id;
    const body = {
      ...values,
      id,
    };

    updateDonation(body);
  };

  const handleDonationSubmitFailed = (errors) => {
    console.log("errors: ", errors);
  };

  const handleCharityDelete = () => {
    deleteDonation({ donationId });
  };

  const columns = [
    {
      key: "username",
      title: "Username",
      dataIndex: "username",
    },
    {
      key: "phone",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "donateOption",
      title: "Payment Type",
      dataIndex: "donateOption",
    },
    {
      key:"status",
      title:"Status",
      dataIndex:"status"
    },

    {
      key: "donate",
      title: "Amount",
      dataIndex: "donate",
    },

    {
      key: "fundraisedAt",
      title: "FundraisedAt",
      dataIndex: "fundraisedAt",
      render: (fundraisedAt) => <>{format(fundraisedAt)}</>,
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

  ];

  return (
    <div className="flex flex-col">
      <ToastContainer />
      {editModalVisible && (
        <EditModal
          visible={editModalVisible}
          handleOk={form.submit}
          handleCancel={cancelEditModal}
          loading={isUpdateLoading}
          title="Edit Fundraise Donation"
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
              status: donationData?.status,
            }}
            onFinish={handleDonationSubmit}
            onFinishFailed={handleDonationSubmitFailed}
            autoComplete="off"
            layout="vertical"
            className=""
          >
            <Form.Item label="Status" name="status">
              <Select placeholder="Select status" allowClear>
                <Option value="pending">PENDING</Option>
                <Option value="rejected">REJECTED</Option>
                <Option value="accepted">ACCEPTED</Option>
              </Select>
            </Form.Item>
          </Form>
        </EditModal>
      )}
      {deleteModalVisible && (
        <DeleteModal
          visible={deleteModalVisible}
          handleOk={handleCharityDelete}
          handleCancel={cancelDeleteModal}
          loading={isDeleteLoading}
          title="Delete Fundraise Donation"
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

          <p>Do you really want to Delete Fundrasise Donation ?</p>
        </DeleteModal>
      )}

      {isError && (
        <div className="flex mt-3">
          <p className="text-red-500 text-md font-bold mx-3">
            {error?.name || error?.status}
          </p>
          <p className="text-red-500 text-md font-bold">
            {error?.message || error?.data.message}
          </p>
        </div>
      )}

      <div className="mt-8">
        <Table
          dataSource={allFundraising}
          columns={columns}
          pagination={true}
          loading={isLoading}
          rowKey="id"
        />
      </div>
    </div>
  );
};
