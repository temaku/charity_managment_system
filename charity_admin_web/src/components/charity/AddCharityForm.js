import React, { useState, useEffect } from "react";
import { Form, Input, Button,Spin,Select } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useAddCharityMutation } from "../../services/charity/charity.service";



const AddCharity = () => {

  const [addCharity, { data, isError, isFetching, isLoading, isSuccess, error }] = useAddCharityMutation()
  const _addedCharity = data?.data


  useEffect(() => {
    if (isSuccess && _addedCharity) {
      toast.success("Charity added successfully!")
    }
  }, [isSuccess])




  const [form] = Form.useForm();

  const { Option } = Select;


  const onFinish = (values) => {
    console.log("values: ", values);
    addCharity(values)
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
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name of Charity!",
                },
              ]}

            >
              <Input placeholder="Name" />
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
             label="Category"
             name="category">
              
              <Select
              placeholder="Select a category  for charity"
              allowClear >
              <Option value="628249bad6233ba72971876e">Mekedonia</Option>
              <Option value="62824b7fd6233ba729718771">Love and Care</Option>
              <Option value="62824e85d6233ba729718774">Sitota Mental Care</Option>
            </Select>
            
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
              label="Address"
              name="address"
            >
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
            >
              <Input placeholder="Phone" />
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

export default AddCharity;