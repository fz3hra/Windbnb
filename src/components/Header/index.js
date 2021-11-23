import React from 'react'
import { Nav, Div, Logo } from './HeaderElements'
// import LogoTriangleSrc from '../../images/triangleLogo.png'
import LogoSrc from '../../images/logo.png'

const Header = () => {
    return (
        <Nav>
            <Div>
                <Logo>
                    <img src={LogoSrc} alt="" />
                </Logo>
            </Div>
        </Nav>
    )
}

export default Header
