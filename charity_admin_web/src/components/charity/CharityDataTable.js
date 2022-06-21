import React, { useEffect, useState } from "react";
import { Table, Form, Input, Select } from "antd";
import {
  useDeleteCharityMutation,
  useGetAllCharitiesQuery,
  useUpdateCharityMutation,
} from "../../services/charity/charity.service";
import moment from "moment";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";
import { toast, ToastContainer } from "react-toastify";

export const CharityDataTable = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [charityData, setCharityData] = useState({});
  const [charityId, setCharityId] = useState("");

  const { data, isError, isFetching, isLoading, isSuccess, error } =
    useGetAllCharitiesQuery();
  const allCharities = data?.data;

  // updating and deleting the charity
  const [
    updateCharity,
    {
      data: updatedData,
      isError: isUpdateError,
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      error: updateError,
    },
  ] = useUpdateCharityMutation();
  const [
    deleteCharity,
    {
      data: deletedData,
      isError: isDeleteError,
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      error: deleteError,
    },
  ] = useDeleteCharityMutation();

  const [form] = Form.useForm();

  const { Option } = Select;

  const { TextArea } = Input;

  // toast charity edite message
  useEffect(() => {
    if (isUpdateSuccess && updatedData) {
      toast.success("Charity Updated successfully!");
      setTimeout(() => {
        setEditModalVisible(false);
      }, 2000);
    }
    return () => {
      setCharityData({});
    };
  }, [isUpdateSuccess]);

  // toast charity delete message
  useEffect(() => {
    if (isDeleteSuccess && deletedData) {
      toast.success("Charity Deleted successfully!");
      setTimeout(() => {
        setDeleteModalVisible(false);
      }, 2000);
    }
  }, [isDeleteSuccess]);

  // set modals visible
  const showEditModal = (record) => {
    form.setFieldsValue(record);
    setEditModalVisible(true);
    setCharityData(record);
  };

  const cancelEditModal = () => {
    setEditModalVisible(false);
  };

  const showDeleteModal = (record) => {
    setDeleteModalVisible(true);
    const id = record._id;
    setCharityId(id);
  };

  const cancelDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const handleCharitySubmit = (values) => {
    const id = charityData._id;
    const body = {
      ...values,
      id,
    };

    updateCharity(body);
  };

  const handleCharitySubmitFailed = (errors) => {
    console.log("errors: ", errors);
  };

  const handleCharityDelete = () => {
    deleteCharity({ charityId });
  };

  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "address",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "phone",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "NumOfDonors",
      title: "Donation",
      dataIndex: "NumOfDonors",
    },
    {
      key: "SumofDonations",
      title: "Total",
      dataIndex: "SumofDonations",
    },
    {
      key: "createdAt",
      title: "Created At",
      dataIndex: "createdAt",
      render: (createdAt) => <>{moment(createdAt).format("L")}</>,
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
          title="Edit Charity"
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
            initialValues={charityData}
            onFinish={handleCharitySubmit}
            onFinishFailed={handleCharitySubmitFailed}
            autoComplete="off"
            layout="vertical"
            className=""
          >
            <Form.Item label="Name" name="name">
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <TextArea rows={3} />
            </Form.Item>
            <Form.Item label="Category" name="category">
              <Select placeholder="Select a role" allowClear>
                <Option value="62824794d6233ba729718767">Elderly care</Option>
                <Option value="62824778d6233ba729718764">Child Care</Option>
                <Option value="6282472fd6233ba729718761">
                  Mental Illness Care
                </Option>
              </Select>
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input placeholder="Phone" />
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
          title="Delete Charity"
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

          <p>Do you really want to Delete charity ?</p>
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
          dataSource={allCharities}
          columns={columns}
          pagination={true}
          loading={isLoading}
          rowKey="id"
        />
      </div>
    </div>
  );
};
