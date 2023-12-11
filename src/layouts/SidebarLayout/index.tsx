import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import NavigationDrawer from "./NewSideBar";

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {

  return (
    <>
          <NavigationDrawer>
              <Outlet />
          </NavigationDrawer>
    </>
  );
};

export default SidebarLayout;
