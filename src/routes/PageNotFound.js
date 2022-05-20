import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const PageNotFound = () => {
    const navigate = useNavigate()

    const helpLogin = () => {
        navigate('/')
    }

    return (
        <div className='flex items-center justify-center self-center h-screen'>
            <div className='w-1/2 h-40 flex flex-col items-center'>
                <h1 className='text-9xl text-gray-800'>404</h1>
                <p className='text-3xl text-gray-800'>Oops! it seems like you're lost.</p>
                <Button
                    type='primary'
                    onClick={helpLogin}
                >
                    Go to login page
                </Button>
            </div>
        </div>
    )
}
