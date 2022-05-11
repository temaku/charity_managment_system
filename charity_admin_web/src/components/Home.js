
import { Layout, Menu } from 'antd';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Home.css';
import { Navbar } from './navbar';

import { AiOutlineLogout, AiOutlineSetting, AiOutlineNotification, AiOutlineUser, AiOutlineHome } from 'react-icons/ai'

import { FiUsers } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';



export const Home = (props) => {

    const { Header, Content, Sider } = Layout;

    const params = useLocation()

    const navigate = useNavigate()



    const onLogout = () => {
        navigate('/')
    }

    return (
        <Layout className='app-body'>
            <Header
                className="header navbar-container">
                <Navbar />
            </Header>


            <Layout>
                <Sider
                    width={250}
                    className="site-layout-background mt-10 py-2 sidebar-container relative"
                    breakpoint="lg"
                    collapsedWidth="0"
                    trigger={null}
                >

                    <Menu
                        mode="inline"
                        selectedKeys={params.pathname}
                        style={{ height: '100%', borderRight: 0, marginTop: 50 }}
                    >
                        <Menu.Item key="/dashboard" icon={<AiOutlineHome />}>
                        <NavLink to="/dashboard" className='nav-text'>
                            Dashboard
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
                    <div className='absolute bottom-4 left-0 w-full h-20'>
                        <span className=' flex items-center ml-4 mt-2 cursor-pointer' onClick={() => onLogout()}>
                            <AiOutlineLogout className='w-6 h-6 mr-3' />
                            <p className='text-md font-bold mt-2'>Logout</p>
                        </span>
                    </div>
                </Sider>

                <Layout className="site-layout" >
                    <Content
                        className="site-layout-background mt-10 py-2 w-full body_content"
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
