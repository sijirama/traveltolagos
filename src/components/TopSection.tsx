import React from 'react';
import { TopSectionContainer } from '../StyledComponents/TopSection.styled';
import LagosLogo from './logo/LagosLogo';
import Navbar from './Navbar';
import {
  DescriptionText,
  FloatingText,
  InfoSection,
  LandingSection,
  OutlinedTextSvg,
} from '../StyledComponents/LandingSection.styled';

type Props = {};

function TopSection({}: Props) {
  return (
    <TopSectionContainer>
      <LandingSection>
        <Navbar />
        <InfoSection>
          <FloatingText>WELCOME</FloatingText>
          <FloatingText style={{ display: 'inline-flex' }}>
            TO
            <OutlinedTextSvg viewBox="0 0 530 100">
              <text>Lagos</text>
            </OutlinedTextSvg>
          </FloatingText>
          <DescriptionText>Lagos, capital of Nigeria and pride of Africa</DescriptionText>
        </InfoSection>
      </LandingSection>
    </TopSectionContainer>
  );
}

export default TopSection;
