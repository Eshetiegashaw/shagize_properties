import { useFrappeAuth, useFrappeGetDoc } from "frappe-react-sdk";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import Layout from "./layout";


function HomePage() {
    const [company, setCompany] = useState(null);
    const [users, setUsers] = useState([]);


    const { data: companyData } = useFrappeGetDoc("Company");
    const { data: userData } = useFrappeGetDoc("User");

    useEffect(() => {
        if (companyData) {
            setCompany(companyData?.[0]?.name); // safe access
        }
    }, [companyData]);

    useEffect(() => {
        if (userData) setUsers(userData);
    }, [userData]);



    return (
        <ContentLayout title="User List">
            <div className="min-h-screen p-4">

                {/* Users Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
