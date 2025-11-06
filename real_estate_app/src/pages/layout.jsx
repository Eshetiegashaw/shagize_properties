import { Sidebar } from "@/components/admin-panel/sidebar";
import { Footer } from "@/components/admin-panel/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 flex flex-col min-h-screen">
                <main className="flex-1 p-6 lg:ml-72">
                    <Outlet /> {/* Nested routes like HomePage render here */}
                </main>
                <Footer className="lg:ml-72" /> {/* align footer with main content */}
            </div>
        </div>
    );
}
