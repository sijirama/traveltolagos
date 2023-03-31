import tw from 'tailwind-styled-components';

export const LandingSection = tw.div`
    w-full
    h-screen
    flex
    flex-col
    bg-no-repeat 
    bg-cover 
    md:bg-bottom
    bg-center
    bg-image
    //bg-festive
`;

export const InfoSection = tw.div`
    absolute
    top-[150px]
    // left-3
    //lg:top-[150px]
    lg:right-5    
    z-[100]
    //lg:left-auto
    xl:left-45
    2xl:top-[240px]
    2xl:right-auto    

    max-w-full
`;

export const FloatingText = tw.h1`
    m-0
    max-w-full
    text-black
    text-[3rem]
    leading-[25px]
    lg:text-[8rem]
    lg:leading-[90px]
    2xl:text-[7rem]
    // 2xl:leading-[120px]
    font-Kanit
    flex
    items-center   
`;

export const OutlinedTextSvg = tw.svg`
    font-extrabold
    font-Kanit
    
    lg:text-[8rem]

    w-[550px]
    h-[100px]
    lg:w-[580px]
    lg:h-[110px]
    2xl:w-[550px]
    2xl:h-[110px]
    flex
    overflow-visible

    text{
        ml-3
        max-h-full
        flex-1
        fill-none
        stroke-black
        stroke-2
        z-50
        2xl:translate-y-[100px]
        lg:translate-y-[97px]
        translate-y-[71px]
        
    }
`;

export const DescriptionText = tw.p`
    lg:text-lg
    text-black
    text-opacity-80
    lg:mt-10
    max-w-lg
    2xl:max-w-xl
`;

const ViewMoreButton = tw.p`
    absolute
    bottom-4
    left-1/2
    -translate-x-1/2
    text-black
    text-4xl
    transition-colors
    duration-200
    hover:text-gray-800

`;
