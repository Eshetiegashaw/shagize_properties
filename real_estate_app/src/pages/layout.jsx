
import { Outlet, useLocation } from "react-router-dom";
import { AuthenticatedLayout } from "@/components/layout/authenticated-layout";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ThemeSwitch } from '@/components/shared/theme-switch'
import { ProfileDropdown } from "@/components/shared/profile-dropdown";


export default function Layout() {
  const { pathname } = useLocation();
  const headerTitleMap = [
    { pattern: /^\/$/, title: "Dashboard" },
    { pattern: /^\/dashboard$/, title: "Dashboard" },
    { pattern: /^\/properties$/, title: "Properties" },
    { pattern: /^\/floors$/, title: "Floors" },
    { pattern: /^\/floor\/[^/]+$/, title: "Floor Details" },
    { pattern: /^\/rooms$/, title: "Rooms" },
    { pattern: /^\/room\/[^/]+$/, title: "Room Details" },
    { pattern: /^\/agents$/, title: "Agents" },
    { pattern: /^\/clients$/, title: "Clients" },
    { pattern: /^\/appointments$/, title: "Appointments" },
  ];

  const title =
    headerTitleMap.find(({ pattern }) => pattern.test(pathname))?.title ?? "";

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
