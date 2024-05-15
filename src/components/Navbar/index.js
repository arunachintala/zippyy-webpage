import React from 'react';
import { Menu, Button } from 'antd';
import './Navbar.css';
import DropDown from '../DropDown';
import logo from '../../assets/images/Logo.svg';

const Navbar = () => {
  return (
    <div className='navbar' style={{ backgroundColor: '#F44E32' }}>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <Menu
        mode='horizontal'
        className='menu'
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#F44E32',
        }}
      >
        <Menu.Item key='home'>Home</Menu.Item>

        <Menu.Item key='home'>
          <DropDown />
        </Menu.Item>

        {/* <SubMenu key='products' title='Products'>
          <Menu.Item key='product1'>Product 1</Menu.Item>
          <Menu.Item key='product2'>Product 2</Menu.Item>
          {/* Add more product links as needed */}

        <Menu.Item key='how'>How It Works?</Menu.Item>
        <Menu.Item key='pricing'>Pricing</Menu.Item>
      </Menu>
      <div className='right-side'>
        <Button className='signin' type='normal'>
          Sign In
        </Button>
        <Button className='signup' type='primary'>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
