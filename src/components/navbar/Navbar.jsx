import './navbar.scss'
import React, { useState } from 'react';

import logo from '../../assets/img/logo.png'
import SideBar from '../sidebar/SideBar';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false)

    const onClickBtn = () => {
        setMenuActive(!menuActive)
        console.log(menuActive)
    }

    return (
        <div className='navbar'>
            <div className='navbar__inner'>
                <div className='navbar__left' onClick={onClickBtn}>
                    <img src={logo} alt="" />
                </div>

                <div className='navbar__right'>
                    <p>Some</p>
                    <p>Some</p>
                    <p>Some</p>
                    <p>Some</p>
                    <p>Some</p>
                </div>
            </div>

            <SideBar active={menuActive} setActive={setMenuActive}/>

        </div>
    );
};

export default Navbar;