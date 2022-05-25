import React, { useState, useEffect } from "react";
import { Form, Input, Button,Spin,Select } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useAddBudgetMutation } from "../../services/budget/budget_service";



const AddBudget = () => {

  const [addBudget, { data, isError, isFetching, isLoading, isSuccess, error }] = useAddBudgetMutation()
  const _addedBudget = data?.data


  useEffect(() => {
    if (isSuccess && _addedBudget) {
      toast.success("Budget allocated  successfully!")
    }
  }, [isSuccess])




  const [form] = Form.useForm();

  


  const onFinish = (values) => {
    console.log("values: ", values);
    addBudget(values)
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

export default AddBudget;