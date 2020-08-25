import React, { useState } from "react";
import Axios from "axios";
import { SmileOutlined } from "@ant-design/icons";
import { Form, Input, Button, notification, Card } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import useLocalStorage from "Utils/useLocalStorage";
import { useAppContext } from "store";
import { setToken } from "store";

function Login() {
  const location = useLocation();
  const { dispatch } = useAppContext();
  const history = useHistory();
  // const [jwtToken, setJwtToken] = useLocalStorage("jwtToken", "");
  const [fieldsErrors, setFieldsErrors] = useState({});

  const { from: loginRedirectUrl } = location.state || {
    from: { pathname: "/" },
  };

  const onFinish = (values) => {
    async function fn() {
      const { username, password } = values;
      const data = { username, password };

      try {
        const response = await Axios.post(
          "http://localhost:8000/accounts/token/",
          data
        );
        const {
          data: { token: jwtToken },
        } = response;

        // setJwtToken(jwtToken);
        dispatch(setToken(jwtToken));

        notification.open({
          message: "로그인 성공",
          icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        });
        history.push(loginRedirectUrl);
      } catch (error) {
        if (error.response) {
          notification.open({
            message: "로그인 실패",
            description: "아이디/암호를 확인해주세요.",
            icon: <SmileOutlined style={{ color: "#ff3333" }} />,
          });

          const { data: fieldsErrorsMessage } = error.response;
          setFieldsErrors(
            Object.entries(fieldsErrorsMessage).reduce(
              (acc, [fieldName, errors]) => {
                acc[fieldName] = {
                  validateStatus: "error",
                  help: errors.join(" "),
                };
                return acc;
              },
              {}
            )
          );
        }
      }
    }
    fn();
  };
  return (
    <Card title="login">
      <Form
        {...layout}
        onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              min: 5,
              message: "5글자 이상 입력하세여",
            },
          ]}
          hasFeedback
          {...fieldsErrors.username}
          {...fieldsErrors.non_field_errors}
        >
          <Input />
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
          {...fieldsErrors.password}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default Login;
