import React from 'react'
import { NavbarComponent } from '../StyledComponents/Navbar.styled'
import LagosLogo from './logo/LagosLogo'

type Props = {}

function Navbar({}: Props) {
  return (
    <NavbarComponent>
        <LagosLogo />
    </NavbarComponent>
  )
}



export default Navbar