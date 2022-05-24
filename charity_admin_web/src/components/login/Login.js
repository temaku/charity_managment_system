import React, { useEffect } from "react";

import "./login.css";

import charityLogo from "../../assets/img/icon.png";

import { Form, Input, Button, Checkbox } from "antd";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { reset, login } from "../../features/authSlice";

import { toast, ToastContainer } from "react-toastify";

export const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
      navigate("/dashboard");
    }

    // reset everything to initial
    dispatch(reset());
  }, [dispatch, navigate, isSuccess]);

  console.log("message: ", message);

  const onFinish = (values) => {
    console.log("values: ", values);
    dispatch(login(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <ToastContainer />

      <div className="md:flex items-center login_container h-screen">
        <div className="md:w-1/2 h-full login_left hidden md:block lg:block">
          <div className="image_div hidden md:block lg:block">
            <img src={charityLogo} alt="watch dog logo" className="logo_1" />
          </div>
        </div>
        <div className="md:w-1/2 w-full mt-10 md:my-0">
          <div className="logo_sm md:hidden lg:hidden">
            <img src={charityLogo} alt="watch dog logo" className="logo_1" />
          </div>

          <div className="flex flex-col items-center w-full">
            <h3 className="header_3 hidden md:block">
              Welcome to Charity Management
            </h3>

            <div className="flex flex-col w-4/5">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className=""
              >
                <Form.Item
                  label="userName"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your userName!",
                    },
                  ]}
                >
                  <Input type="text" placeholder="charity123" />
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

                <div className="flex w-full items-center py-2 justify-center">
                  <div className="w-1/2">
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      className=""
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </div>
                  <div className="w-1/2">
                    <p type="button" className="password_forget_button">
                      Forgot your password?
                    </p>
                  </div>
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="ant-btn-primary-login"
                    loading={isLoading}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
