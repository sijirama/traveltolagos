import React from 'react';
import tw from 'tailwind-styled-components';

type Props = {};

function LagosLogo({}: Props) {
  return <LogoContainer>Lagos</LogoContainer>;
}

const LogoContainer = tw.div`
    font-black
    text-2xl
    // text-white
    text-black
`;

export default LagosLogo;
