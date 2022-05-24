import { Button } from 'antd'
import React from 'react'
import { Home } from '../Home'
import { DonationDataTable } from './DonationDataTable'

export const Donation = () => {
    return (
        <Home>
            <div className='flex flex-col'>

                <div className='flex items-center justify-between flex-wrap-reverse mt-5 bg-gray-200 px-5 py-3'>
                    <div className='mt-4 md:w-1/3 w-full'>
                        <p className='font-bold text-md text-gray-800'>Donation</p>
                    </div>

                    {/* <div className='mt-4  md:justify-end'>
                        <Button
                            type='primary'
                            className='px-7'>
                            Add Donation
                        </Button>
                    </div> */}

                </div>

                <DonationDataTable />

            </div>

        </Home>
    )
}
