
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useFrappeGetDoc, useFrappeGetDocList } from "frappe-react-sdk";
import { ContentLayout } from "@/components/admin-panel/content-layout";


function FloorLists() {
    const [floors, setFloors] = useState([]);

    const { data: floorData, isLoading, error } = useFrappeGetDocList("Floors", {
        fields: ['name', 'floor_name', 'no_rooms', 'area', 'image']
    });

    useEffect(() => {
        if (floorData) {
            setFloors(floorData);
        }
    }, [floorData])

    console.log(floorData);


    return (
        <ContentLayout title="Floor Lists">
            <div className="min-h-screen p-1">
                {isLoading ? (
                    <p>Loading floor lists...</p>
                ) : error ? (
                    <p>Error loading floor lists: {error.message}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {floors.length > 0 ? (
                            floors.map((flr) => (
                                <Card key={flr?.name} className="border shadow-sm">
                                    <CardHeader>
                                        <CardTitle>{flr?.floor_name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {
                                            flr?.image ? <img src={flr?.image} alt="Floor Image" /> : <></>
                                        }
                                        <p>Number of Rooms: {flr?.no_rooms}</p>
                                        <p>Area: {flr?.area}</p>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <p>Could not get floor lists.</p>
                        )}
                    </div>
                )}
            </div>
        </ContentLayout>
    );
}

export default FloorLists;
