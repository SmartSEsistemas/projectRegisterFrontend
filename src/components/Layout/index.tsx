// components/Layout.tsx
import { ReactNode, useRef, useState } from 'react';
import { Sidebar } from '../Sidebar/SiderBar';
import Navbar from '../Navbar/Navbar';
import { SidebarProps } from '@/@types/sideBar/SideBar';
import { MainContainer } from '@/styles/global';
import { MainContent } from '@/Containers/HomeContainer/styles';

interface LayoutProps {
  children: ReactNode;
  dataSideBar?: SidebarProps;
}

const Layout: React.FC<LayoutProps> = ({ children, dataSideBar }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div>
      <div>
        <MainContainer>
          {dataSideBar && <Sidebar data={dataSideBar.data} />}
          <MainContent>
            <Navbar />
            <main>{children}</main>
          </MainContent>
        </MainContainer>
      </div>
    </div>
  );
};

export default Layout;
