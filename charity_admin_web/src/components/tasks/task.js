import { Button } from 'antd'
import React from 'react'
import { TaskDataTable } from './taskDataTable'
import { Link } from "react-router-dom";

export const Task = () => {
    return (
        
            <div className='flex flex-col'>

                <div className='flex items-center justify-between flex-wrap-reverse mt-5 bg-gray-200 px-5 py-3'>
                    <div className='mt-4 md:w-1/3 w-full'>
                        <p className='font-bold text-md text-gray-800'>Task</p>
                    </div>

                    <div className='mt-4  md:justify-end'>
                    <Link to="/tasks/add-task">
                      <Button type="primary" className="px-7">
                         Add Task
                    </Button>
                    </Link>
                    </div>

                </div>

                <TaskDataTable />

            </div>

        
    )
}
