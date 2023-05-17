// components/Sidebar.tsx
import React from 'react';
import { SidebarContainer, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem } from './style';
import { ICONS } from '@/utils/Icons';

interface SidebarProps {
  modulosData: {
    nomeModulo: string;
    submodulos: string[];
  }[];
  Icone?  : any;
}

export const Sidebar: React.FC<SidebarProps> = ({ modulosData, Icone}) => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        {/* Logo e nome da aplicação */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {modulosData.map((modulo, index) => {
            return (
              <SidebarMenuItem key={index}>
                {Icone && <Icone size={16} weight="regular" color="red" />}
                {modulo.nomeModulo}
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </SidebarContainer>
  );
};
