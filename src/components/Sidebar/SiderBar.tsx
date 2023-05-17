// components/Sidebar.tsx
import React from 'react';
import { SidebarContainer, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem } from './style';




export const Teste = () => {

  const fields = [
    { name: 'nome', },
    { name: 'email'},
    { name: 'text' },
    { name: 'Te' },
    { name: 'Ste' },
    { name: 'RTE' },
  ];

  return (
    <SidebarContainer>
      <SidebarHeader>
        {/* Logo e nome da aplicação */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {fields.map((field) => (
            <SidebarMenuItem key={field.name}>{field.name}</SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </SidebarContainer>
  );
};

