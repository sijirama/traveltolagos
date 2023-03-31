import tw from 'tailwind-styled-components';

export const NavbarComponent = tw.nav`
    flex
    justify-center
    h-20
    px-6
    py-4
    border-b-2
    border-gray-200
    border-opacity-50
    items-center

    > a{
        lg:visible
        text-red-600
    }
`;

export const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    lg:h-full
    flex
    lg:ml-20
    justify-center
    items-center
`;

export const NavItem = tw.li`
    lg:mr-8
    flex
    items-center
    justify-center
    min-h-full
    text-black
    font-extrabold
    cursor-pointer
    text-lg
    lg:text-base
    transition-colors
    transition-duration[300ms]
    hover:text-gray-500
    box-content
    mb-2
    lg:mb-0
`;
