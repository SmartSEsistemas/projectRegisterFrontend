// components/Layout.tsx
import { ReactNode, useRef, useState } from 'react';
import { Sidebar } from '../Sidebar/SiderBar';
import Navbar from '../Navbar/Navbar';


interface LayoutProps {
  children: ReactNode;
  modulosDataArray: { nomeModulo: string, submodulos: string[], icone: string }[];  
}

const Layout: React.FC<LayoutProps> = ({ children, modulosDataArray }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handlePageClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsSidebarVisible(false);
    }
  };
  const modulosData = modulosDataArray;

  const handleMenuClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div onClick={handlePageClick}>
      <div>
        <Navbar
          onMenuClick={handleMenuClick}
          isSidebarVisible={isSidebarVisible}
        />
        {isSidebarVisible && (
          <div ref={sidebarRef}>
            <Sidebar modulosData={modulosData} />
          </div>
        )}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
function setIsSidebarVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}

