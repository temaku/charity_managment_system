import React from 'react'

import {
    Charity,
    Dashboard,
    Donation,
    Login,
    User,
    Event
} from '../components';

import {
    Routes,
    Route,
} from "react-router-dom";


import { PageNotFound } from './PageNotFound';

export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />}></Route>

                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/users' element={<User />} />
                    <Route path='/charity' element={<Charity />} />
                    <Route path='/donation' element={<Donation />} />
                    <Route path='/event' element={<Event />} />
                    <Route path='/fundraising' element={<Event />} />
                    

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}
