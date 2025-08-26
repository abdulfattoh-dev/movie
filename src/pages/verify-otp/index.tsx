import React from 'react'
import { Flex, Input } from 'antd';
import type { GetProps } from 'antd';
import { useVerifyOtp } from './services/useVerifyOtp';
import { useNavigate } from 'react-router-dom';

import './style/index.css'

type OTPProps = GetProps<typeof Input.OTP>;

const VerifyOtp = () => {
    const { verifyOtp } = useVerifyOtp()
    const navigate = useNavigate()

    const onChange: OTPProps['onChange'] = (text) => {
        console.log('onChange:', text);
        verifyOtp.mutate(text, {
            onSuccess: () => {
                navigate('/login')
            }
        })
    };

    const onInput: OTPProps['onInput'] = (value) => {
        console.log('onInput:', value);
    };

    const sharedProps: OTPProps = {
        onChange,
        onInput,
    };

    return (
        <div className='bg-black dark:bg-white'>
            <div className='container flex flex-col h-screen items-center'>
                <div className='mt-12 mb-8 text-center flex flex-col gap-4'>
                    <h2 className='text-white dark:text-black text-[32px]'>Enter Verification Code</h2>
                    <p className='text-[#777777]'>We have sent a 6-digit verification code to your email</p>
                </div>

                <Flex className='verify-otp' gap="middle" align="flex-start" vertical>
                    <Input.OTP inputMode='numeric' variant="filled" {...sharedProps} />
                </Flex>

                {/* <div className='flex text-[#777777] gap-2 mt-4'>
                    <p>Did't recieve the code?</p>
                    <NavLink to={'/login'}><p className='text-[#C61F1F] hover:opacity-60'>Login</p></NavLink>
                </div> */}
            </div>
        </div>
    )
}

export default React.memo(VerifyOtp)