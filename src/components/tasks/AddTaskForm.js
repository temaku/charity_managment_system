import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const AddTask = () => {
  const [form] = Form.useForm();
  



  const onFinish = (values) => {
    console.log("values: ", values);
    // dispatch(login(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
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
          label="Status"
          name="status"
          rules={[
            {
              required: true,
              message: "Please input your status!",
            },
          ]}
        >
          <Input  placeholder="Status" />
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
        <Form.Item >
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default AddTask;
