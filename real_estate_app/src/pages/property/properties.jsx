
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useFrappeGetDoc, useFrappeGetDocList } from "frappe-react-sdk";
import { ContentLayout } from "@/components/admin-panel/content-layout";


function PropertyLists() {
    const [properties, setProperties] = useState([]);

    const { data: proertiesData, isLoading, error } = useFrappeGetDocList("Property", {
        fields: ['name', 'no_floors', 'area', 'image']
    });

    useEffect(() => {
        if (proertiesData) {
            setProperties(proertiesData); // safe access
        }
    }, [proertiesData])

    console.log(error);


    return (
        <ContentLayout title="Property Lists">
            <div className="min-h-screen p-1">
                {isLoading ? (
                    <p>Loading property lists...</p>
                ) : error ? (
                    <p>Error loading property lists: {error.message}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {properties.length > 0 ? (
                            properties.map((pro) => (
                                <Card key={pro?.name} className="border shadow-sm">
                                    <CardHeader>
                                        <CardTitle>{pro?.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {
                                            pro?.image ? <img src={pro?.image} alt="Floor Image" /> : <></>
                                        }
                                        <p>Number of Floors: {pro?.no_floors}</p>
                                        <p>Area: {pro?.area}</p>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <p>Could not get property lists.</p>
                        )}
                    </div>
                )}
            </div>
        </ContentLayout>
    );
}

export default PropertyLists;
