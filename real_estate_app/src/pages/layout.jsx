
import { Outlet, useLocation } from "react-router-dom";
import { AuthenticatedLayout } from "@/components/layout/authenticated-layout";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ThemeSwitch } from '@/components/shared/theme-switch'
import { ProfileDropdown } from "@/components/shared/profile-dropdown";


export default function Layout() {
  const { pathname } = useLocation();
  const headerTitleMap = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/properties": "Properties",
    "/floors": "Floors",
  };
  const title = headerTitleMap[pathname] ?? "";

  return (
    <AuthenticatedLayout>
      <>
        <Header title={title}>
          <div className='ms-auto flex items-center space-x-4'>
            <ThemeSwitch />
            <ProfileDropdown />
          </div>
        </Header>

        <Main>
          <Outlet />
        </Main>
      </>
    </AuthenticatedLayout>
  );
}
