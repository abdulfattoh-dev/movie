import { Button, Form, Input, type FormProps } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';

import './style/index.css'

type FieldType = {
    email: string;
    password: string;
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login = () => {
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className='bg-black dark:bg-white'>
            <div className='container flex flex-col h-screen items-center'>
                <div className='mt-12 mb-8 text-center flex flex-col gap-4'>
                    <h2 className='text-white dark:text-black text-[32px]'>Login</h2>
                    <p className='text-[#777777]'>Access your account to explore all features</p>
                </div>
                <Form
                    name="basic"
                    style={{ minWidth: 380 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input className='!p-5.5 !bg-[#111111] dark:!bg-white !border-black dark:!border-[#777777] !text-white dark:!text-black !rounded-xl' placeholder='Enter yout email' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password className='!p-5.5 !bg-[#111111] dark:!bg-white !border-black dark:!border-[#777777] !text-white dark:!text-black !rounded-xl' placeholder='Enter yout password' />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button className='w-full !h-13 !bg-[#C61F1F] !rounded-xl hover:opacity-60' type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <div className='flex text-[#777777] gap-2'>
                    <p>Don't have an account?</p>
                    <NavLink to={'/register'}><p className='text-[#C61F1F] hover:opacity-60'>Register</p></NavLink>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Login)