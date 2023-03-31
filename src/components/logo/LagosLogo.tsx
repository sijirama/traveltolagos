import React from 'react';
import tw from 'tailwind-styled-components';

type Props = {};

function LagosLogo({}: Props) {
  return <LogoContainer>Lagos</LogoContainer>;
}

const LogoContainer = tw.div`
    font-black
    text-black
    font-Abril
    text-2xl 
    sm:text-3xl 
    lg:text-4xl
`;

export default LagosLogo;
