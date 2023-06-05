// components/Sidebar.tsx
import React, { useRef, useState } from 'react';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SubModule,
  ButtonSideBar,
  ContainerButton,
  TabItem,
} from './style';
import { ICONS } from '@/utils/Icons';
import Link from 'next/link';
import { SidebarProps } from '@/@types/sideBar/SideBar';

export const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  const [isOpenBar, setIsOpenBar] = useState(false);
  const listItemsSideBar = useRef<HTMLUListElement | null>(null);

  const handleHoverOn = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    if (!isOpenBar) event.currentTarget.classList.add('showItemTab');
  };
  const handleHoverOff = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    if (!isOpenBar) {
      event.currentTarget.classList.remove('showItemTab');
      handleListLi();
    }
  };

  const handleButtonSideBar = () => {
    setIsOpenBar(!isOpenBar);
    handleListLi();
  };

  const handleListLi = () => {
    const li = listItemsSideBar.current;
    if (!li) return;
    li.querySelectorAll('li').forEach((li) => {
      li.classList.remove('activeItemSideBar');
      li.querySelector('ul')?.classList.remove('activeSubItemSideBar');
    });
  };

  const handleItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const listLi = listItemsSideBar.current;
    if (!listLi) return;

    const current = event.currentTarget;
    listLi.querySelectorAll('li').forEach((li) => {
      if (li === current) current.classList.toggle('activeItemSideBar');
      else li.classList.remove('activeItemSideBar');
    });

    listLi.querySelectorAll('ul').forEach((ul) => {
      if (
        ul === event.currentTarget.querySelector('ul') &&
        !ul.classList.contains('activeSubItemSideBar')
      )
        ul.classList.add('activeSubItemSideBar');
      else {
        if (ul.classList.contains('activeSubItemSideBar'))
          ul.classList.add('disableSubItemSideBar');
        ul.classList.remove('activeSubItemSideBar');
      }
    });
    listItemsSideBar.current
      ?.querySelectorAll('ul')
      .forEach((ul) => ul.classList.remove('disableSubItemSideBar'));
  };

  return (
    <SidebarContainer className={isOpenBar ? 'openSideBar' : 'closeSideBar'}>
      <SidebarHeader>
        <div>LOGO</div>
        <ContainerButton
          onClick={handleButtonSideBar}
          className={isOpenBar ? 'activeClose' : ''}
        >
          <ButtonSideBar className={isOpenBar ? 'activeClose' : ''}>
            <div className={isOpenBar ? 'activeClose' : ''}></div>
            <div className={isOpenBar ? 'activeClose' : ''}></div>
            <div className={isOpenBar ? 'activeClose' : ''}></div>
          </ButtonSideBar>
        </ContainerButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu ref={listItemsSideBar}>
          {data.map((modulo, index) => {
            const Icone = ICONS[modulo.icone as keyof typeof ICONS];
            return (
              <SidebarMenuItem
                key={index}
                onMouseEnter={handleHoverOn}
                onMouseLeave={handleHoverOff}
                onClick={handleItem}
              >
                <TabItem>
                  <Icone size={isOpenBar ? 20 : 25} weight="regular" />
                  <p>{modulo.nomeModulo}</p>
                </TabItem>
                <SubModule>
                  {modulo.submodulos.map(({ link, name }, index) => (
                    <li key={name + index}>
                      <Link href={`${link}`}>{name}</Link>
                    </li>
                  ))}
                </SubModule>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </SidebarContainer>
  );
};
