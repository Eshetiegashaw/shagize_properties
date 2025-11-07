import { Sidebar } from "@/components/admin-panel/sidebar";
import { Footer } from "@/components/admin-panel/footer";
import { Outlet } from "react-router-dom";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export default function Layout() {
    return (
        <AdminPanelLayout>
            <div className="flex-1 flex flex-col min-h-screen">
                <main className="flex-1 p-6 lg:ml-72">
                    <Outlet />
                </main>
                {/* <Footer className="lg:ml-72" /> */}
            </div>
        </AdminPanelLayout>
    );
}
