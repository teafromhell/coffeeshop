import './Header.scss'
import { useState } from 'react'

import logo from '../../assets/revo_logo.png';
import Nav from '../Nav/Nav';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCart } from 'react-icons/io5'

const Header: React.FC = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className='header'>
            <div className='header__logo-left'><div><img src={logo} alt="logo" /></div></div>
            <div className='header__right'>
                {open && <Nav />}
                <div className='header__container-icons'>
                    <GiHamburgerMenu className='header__ham' onClick={() => setOpen(!open)} />
                    <IoCart className='header__cart-icon' />
                </div>
            </div>
            <div className='header__slogan'>
                <div>
                    <b>YOUR</b>
                    <b>PERSONALIZED</b>
                    <b>COFFEE</b>
                </div>
            </div>
        </div>
    )
}

export default Header