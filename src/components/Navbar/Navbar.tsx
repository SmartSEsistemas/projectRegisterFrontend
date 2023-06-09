// components/Navbar.tsx
import React, { useContext } from 'react';
import { AvatarFallback, AvatarImage, AvatarRoot, DropdownContent, DropdownItem, FirstSide, Logo, LogoutButton, MenuIcon, NavItems, NavbarContainer, NotificationCount, NotificationIcon, NotificationWrapper, SettingsIcon, SingOutIcon } from './style';
import { ThemeContext } from '@/contexts/ThemeContext';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';



const Navbar = ({ onMenuClick, isSidebarVisible }: { onMenuClick: () => void; isSidebarVisible: boolean }) => {

    const { theme } = useContext(ThemeContext); // Acesse o tema atual

    const handleClick = () => {
        console.log("click");
        onMenuClick();
      };

    return (
        <NavbarContainer theme={theme} isSidebarVisible={isSidebarVisible} >

            <FirstSide>
                <Logo> <MenuIcon size={24} onClick={handleClick} /> </Logo>
            </FirstSide>

            <NavItems>
                <NotificationWrapper>
                    <NotificationIcon size={20} />
                    <NotificationCount show={true}>10</NotificationCount>
                </NotificationWrapper>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <AvatarRoot>
                            <AvatarImage
                                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                                alt="Colm Tuite"
                            />
                            <AvatarFallback delayMs={600}>
                                CT
                            </AvatarFallback>
                        </AvatarRoot>
                    </DropdownMenu.Trigger>
                    <DropdownContent>
                        <DropdownItem onSelect={() => console.log('Edit profile')}>
                            <SettingsIcon size={20} /> Edit profile
                        </DropdownItem>
                        <DropdownItem onSelect={() => console.log('Logout')}>
                        <LogoutButton href={"/login"}> <SingOutIcon size={20} /> Logout</LogoutButton>  
                        </DropdownItem>
                    </DropdownContent>
                </DropdownMenu.Root>
            </NavItems>
        </NavbarContainer>
    );
};

export default Navbar;
