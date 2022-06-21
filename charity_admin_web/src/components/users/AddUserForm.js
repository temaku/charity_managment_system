import React, { useState, useEffect } from "react";
import { Form, Input, Button, Spin, Select } from "antd";
import { useAddUserMutation } from "../../services/user/user.service";

import { ToastContainer, toast } from 'react-toastify'


import { LoadingOutlined } from '@ant-design/icons';


const AddEditUser = () => {

  const [form] = Form.useForm();

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const { Option } = Select;
  const [isSubmitting, setIsSubmitting] = useState(false)


  const [addUser, { data, isError, isFetching, isLoading, isSuccess, error }] = useAddUserMutation()
  const addedUser = data?.data

  useEffect(() => {
    if (isSuccess) {
      toast.success("Volunteer added successfully!")
      form.resetFields()
    }
  }, [isSuccess])




  const onFinish = (values) => {
    addUser(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <ToastContainer />

      <div className="flex flex-col items-center justify-center w-full">

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


        <div className="my-10 my-10 w-2/3 px-10 py-5 shadow-xl">
          <Form
            form={form}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className=""
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}

            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input type="password" placeholder="password" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
            >
              <Input placeholder="Phone" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input placeholder="Address" />
            </Form.Item>
            
            <Form.Item 
        label="Role"
        name="role"
        >
           <Select
              placeholder="Select the role of user"
              allowClear >
              <Option value="volunteers">Volunteers</Option>
              <Option value="donor">Donor</Option>
            
            </Select>
      
        </Form.Item>

            <Form.Item >
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddEditUser;
