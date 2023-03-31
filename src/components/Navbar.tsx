import React from 'react';
import { NavbarComponent, NavItems, NavItem } from '../StyledComponents/Navbar.styled';
import LagosLogo from './logo/LagosLogo';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { deviceSizes } from './Responsive';
import { slide as Menu } from 'react-burger-menu';
import { MenuStyles } from '../StyledComponents/Menu.styled';
import { FaGithub } from 'react-icons/fa';

type Props = {};

function Navbar({}: Props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSizes.mobile });

  const navItems = (
    <NavItems>
      <NavItem>
        <Link to="Home">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="Explore">Explore</Link>
      </NavItem>
      <NavItem>
        <Link to="TravelPlaces">Travel Places</Link>
      </NavItem>
    </NavItems>
  );

  return (
    <NavbarComponent>
      <LagosLogo />

      {isMobile ? (
        <Menu right styles={MenuStyles}>
          {navItems}
        </Menu>
      ) : null}
      {!isMobile && navItems}

      {!isMobile && (
        <a href="https://github.com/sijirama/traveltolagos">
          <FaGithub size={30} />
        </a>
      )}
    </NavbarComponent>
  );
}

export default Navbar;
