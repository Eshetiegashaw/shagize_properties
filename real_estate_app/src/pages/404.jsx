import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <Card className="max-w-md w-full text-center shadow-md">
                <CardHeader>
                    <CardTitle className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-blue-600">
                        404
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <p className="text-gray-600 text-lg mb-2">Page Not Found</p>
                    <p className="text-sm text-gray-500">
                        Sorry, the page you are looking for doesn’t exist or has been moved.
                    </p>
                </CardContent>

                <CardFooter className="flex justify-center">
                    <Button onClick={() => navigate("/")}>Go Home</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default NotFoundPage;
