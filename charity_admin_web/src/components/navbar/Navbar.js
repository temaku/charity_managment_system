import React, { useEffect, useState } from 'react'

import charityLogo from '../../assets/img/icon.png'

import { Avatar, Menu, Button, Dropdown } from 'antd'
import {
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import {
    AiOutlineLogout,
    AiOutlineSetting,
    AiOutlineNotification,
    AiOutlineUser,
    AiOutlineHome,
    AiOutlineClose,

} from 'react-icons/ai'

import { FiUsers } from 'react-icons/fi'

import { useLocation, useNavigate, NavLink } from 'react-router-dom';

import { BiHelpCircle } from 'react-icons/bi'

import './navbar.css'

import { logout, reset } from '../../features/authSlice'

import { useSelector, useDispatch } from 'react-redux'
import { current } from '@reduxjs/toolkit';


export const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
    const [adminInfo, setAdminInfo] = useState({})

    const params = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch()



    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        if (currentUser) {
            const admin = currentUser?.admin
            setAdminInfo(admin)
        } else {
            setAdminInfo({})
        }

    }, [])



    const userLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    const handleAvatar = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen)
    }

    const CustomMenu = () => {
        return (
            <div className='relative h-96 z-10'>
                <Menu
                    mode="inline"
                    selectedKeys={params.pathname}
                    style={{ height: '90%', borderRight: 0, marginTop: 5, marginRight: 0 }}
                >
                    <Menu.Item key="/dashboard" icon={<AiOutlineHome />}>
                        <NavLink to="/dashboard" className='nav-text'>
                            Dashboard Hellow
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="/users" icon={<AiOutlineUser />}>
                        <NavLink to="/users" className='nav-text'>
                            Users
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/charity" icon={<FiUsers />}>
                        <NavLink to="/charity" className='nav-text'>
                            Charity
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="/donation" icon={<FiUsers />}>
                        <NavLink to="/donation" className='nav-text'>
                            Donations
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/event" icon={<AiOutlineNotification />}>
                        <NavLink to="/event" className='nav-text'>
                            Events
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/fundraising" icon={<AiOutlineSetting />}>
                        <NavLink to="/fundraising" className='nav-text'>
                            Fundraising
                        </NavLink>
                    </Menu.Item>
                </Menu>
                <div data-cy="logout_button" className='absolute bottom-5 left-0 w-full h-20'>
                    <span className=' flex items-center ml-4 mt-2 cursor-pointer' onClick={userLogout}>
                        <AiOutlineLogout className='w-5 h-5 mr-3' />
                        <p className='text-sm  mt-2'>Logout</p>
                    </span>
                </div>
            </div>
        )
    }


    const menu = (
        <Menu>
            <Menu.Item key="/profile" icon={<AiOutlineUser />}>
                <NavLink to="/profile" className='nav-text'>
                    My Profile
                </NavLink>
            </Menu.Item>

            <Menu.Divider />

            <Menu.Item key="/change-password" icon={<BiHelpCircle />}>
                <NavLink to="/change-password" className='nav-text'>
                    Help Center
                </NavLink>
            </Menu.Item>
            <Menu.Item key="/account-setting" icon={<AiOutlineSetting />}>
                <NavLink to="/account-setting" className='nav-text'>
                    Account Settings
                </NavLink>
            </Menu.Item>
        </Menu>
    );


    return (
        <div className='flex justify-between h-full relative'>

            {/* menu for mobile devices begins*/}

            <div style={{ width: 256 }} className='md:hidden block'>
                <Button type="primary" onClick={toggleMenu}
                    style={{ marginBottom: 16, background: "#ffffff", border: "none", color: "#321" }}>
                    {React.createElement(isMenuOpen ? AiOutlineClose : MenuUnfoldOutlined)}
                </Button>
                {
                    isMenuOpen && <CustomMenu />
                }
            </div>
            {/* menu for mobile devices ends */}

            <div className='flex items-center justify-center'>
                <img src={charityLogo} alt='watch dog logo' className='hidden md:block lg:block watch-dog-logo' />
                <p className='text-xl text-gray-800 font-bold mt-4'>Charity Management</p>
            </div>

            <div className='mx-3 py-3 navbar-right'>

                <div className='flex w-1/2 relative h-full md:w-full flex items-center justify-center md:mt-5 mt-5'>
                    <p className='mx-3 text-md text-gray-800 font-bold'>{adminInfo?.username}</p>

                    <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" className='navbar-menu'>
                        <p onClick={e => e.preventDefault()}>
                            <Avatar
                                size={40}
                                onClick={handleAvatar}
                                className='cursor-pointer'
                            >
                                <AiOutlineUser className='w-8 h-8 my-1' />

                            </Avatar>
                        </p>
                    </Dropdown>
                </div>
            </div>

            {/* <div style={{ width: 200, height: 150, zIndex: 20 }}>
                {
                    isProfileMenuOpen && <ProfileMenu />
                }
            </div> */}
        </div>
    )
}
