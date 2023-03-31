import React from 'react'
import { TopSectionContainer } from '../StyledComponents/TopSection.styled'
import LagosLogo from './logo/LagosLogo'
import Navbar from './Navbar'
import { LandingSection } from '../StyledComponents/LandingSection.styled'

type Props = {}

function TopSection({}: Props) {
  return (
    <TopSectionContainer>
      <LandingSection>
        <Navbar />
      </LandingSection>
    </TopSectionContainer>
  )
}

export default TopSection