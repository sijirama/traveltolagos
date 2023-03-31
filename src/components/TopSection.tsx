import React from 'react'
import { TopSectionContainer } from '../StyledComponents/TopSection.styled'
import LagosLogo from './logo/LagosLogo'
import Navbar from './Navbar'

type Props = {}

function TopSection({}: Props) {
  return (
    <TopSectionContainer>
        <Navbar />
    </TopSectionContainer>
  )
}

export default TopSection