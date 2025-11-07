import { useEffect, useState } from "react";
import { useFrappeGetDoc } from "frappe-react-sdk";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


function Dashboard() {
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
        <ContentLayout title="Dashboard">
            <div className="min-h-screen p-1">
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

export default Dashboard;
