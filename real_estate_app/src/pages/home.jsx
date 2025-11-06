import { useFrappeAuth, useFrappeGetDoc } from "frappe-react-sdk";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import Layout from "./layout";


function HomePage() {
    const { logout, currentUser } = useFrappeAuth();
    const navigate = useNavigate();
    const [company, setCompany] = useState(null);
    const [users, setUsers] = useState([]);

    // Fetch company info
    const { data: companyData } = useFrappeGetDoc("Company");
    useEffect(() => {
        if (companyData) {
            setCompany(companyData?.[0]?.name); // safe access
        }
    }, [companyData]);


    // Fetch all users
    const { data: userData } = useFrappeGetDoc("User");

    console.log(userData);
    useEffect(() => {
        if (userData) setUsers(userData);
    }, [userData]);
    return (
        <ContentLayout title="Test">
            <div className="min-h-screen p-4">
                {/* Company Name */}
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">{company || "Company"}</h1>
                    {/* <Button variant="destructive" onClick={handleLogout}>
                        Logout
                    </Button> */}
                </header>

                {/* Users Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <Card key={user.name} className="border shadow-sm">
                                <CardHeader>
                                    <CardTitle>{user.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Email: {user.email}</p>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <p>No users found.</p>
                    )}
                </div>
            </div>
        </ContentLayout>
    );
}

export default HomePage;
