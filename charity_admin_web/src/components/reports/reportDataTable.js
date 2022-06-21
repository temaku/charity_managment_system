import React, { useEffect, useState } from "react";
import { Table, Form, Input, Button, Spin, Select } from "antd";
import {
  useGetAllReportsQuery,
  useUpdateReportMutation,
  useDeleteReportMutation,
} from "../../services/reports/report_service";
import moment from "moment";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/DeleteModal";
import { toast, ToastContainer } from "react-toastify";
export const ReportDataTable = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState({});
  const [reportId, setReportId] = useState("");
  const { data, isError, isFetching, isLoading, isSuccess, error } =
    useGetAllReportsQuery();
  const allReports = data?.data;
  console.log("allReports : ", allReports);
  const [
    updateReport,
    {
      data: updatedData,
      isError: isUpdateError,
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      error: updateError,
    },
  ] = useUpdateReportMutation();
  const [
    deleteReport,
    {
      data: deletedData,
      isError: isDeleteError,
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      error: deleteError,
    },
  ] = useDeleteReportMutation();

  const [form] = Form.useForm();
  const { Option } = Select;

  // toast charity edite message
  useEffect(() => {
    if (isUpdateSuccess && updatedData) {
      toast.success("Report Updated successfully!");
      setTimeout(() => {
        setEditModalVisible(false);
      }, 2000);
    }
    return () => {
      setReportData({});
    };
  }, [isUpdateSuccess]);

  // toast charity delete message
  useEffect(() => {
    if (isDeleteSuccess && deletedData) {
      toast.success("Report Deleted successfully!");
      setTimeout(() => {
        setDeleteModalVisible(false);
      }, 2000);
    }
  }, [isDeleteSuccess]);

  // set modals visible
  const showEditModal = (record) => {
    form.setFieldsValue(record);
    setEditModalVisible(true);
    setReportData(record);
  };

  const cancelEditModal = () => {
    setEditModalVisible(false);
  };

  const showDeleteModal = (record) => {
    setDeleteModalVisible(true);
    const id = record._id;
    setReportId(id);
  };

  const cancelDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const handleReportSubmit = (values) => {
    const id = reportData._id;
    const body = {
      ...values,
      id,
    };

    updateReport(body);
  };

  const handleReportSubmitFailed = (errors) => {
    console.log("errors: ", errors);
  };

  const handleReportDelete = () => {
    deleteReport({ reportId });
  };

  const columns = [
    {
      key: "title",
      title: "Title",
      dataIndex: "title",
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
    },

    {
      key: "reportedAt",
      title: "ReportAt",
      dataIndex: "reportedAt",
      render: (reportedAt) => (
        <>
        {
            moment(reportedAt).format("L")
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
          title="Edit Report"
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
            initialValues={reportData}
            onFinish={handleReportSubmit}
            onFinishFailed={handleReportSubmitFailed}
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
          handleOk={handleReportDelete}
          handleCancel={cancelDeleteModal}
          loading={isDeleteLoading}
          title="Delete Reports"
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
          dataSource={allReports}
          columns={columns}
          pagination={true}
          loading={isLoading}
          rowKey="id"
        />
      </div>
    </div>
  );
};
