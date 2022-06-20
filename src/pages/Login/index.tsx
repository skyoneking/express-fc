import type { FormInstance } from 'antd';
import { Button, Card, Form, Input } from 'antd';
import React, { useRef } from 'react';
import { history, useRequest } from 'umi';

import { setAuthorization } from '@/constants/auth';
import * as service from '@/services/todo/login';

type LoginForm = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const loginFormRef = useRef<FormInstance<LoginForm>>(null);

  const { run: login, loading: loginLoading } = useRequest(service.LoginControllerLogin, {
    manual: true,
    onSuccess(data) {
      if (data?.access_token) {
        setAuthorization(data.access_token);
        history.push('/');
      }
    },
  });
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-600 h-400">
        <Card
          className="w-full h-full"
          title={<div className="text-center tracking-widest font-bold">登录</div>}
          extra={<Button type="link">注册</Button>}
        >
          <Form<LoginForm> ref={loginFormRef} labelCol={{ span: 4, offset: 2 }} wrapperCol={{ span: 12 }}>
            <Form.Item label="用户名" name="username" rules={[{ required: true }]}>
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true }]}>
              <Input type="password" placeholder="请输入密码" />
            </Form.Item>
          </Form>
          <div className="flex h-60 justify-around mt-20">
            <Button type="link">忘记密码</Button>
            <Button
              className="self-end mr-60 w-80"
              type="primary"
              loading={loginLoading}
              onClick={() => {
                loginFormRef.current
                  ?.validateFields()
                  .then((res) => {
                    login(res);
                  })
                  .catch(() => {});
              }}
            >
              登录
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Login;
