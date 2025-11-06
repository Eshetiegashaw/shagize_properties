import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFrappeAuth, useFrappeGetCall, useFrappeGetDoc } from "frappe-react-sdk";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa"; // for social icons
import logo from "@/assets/logos/logo-icon-transparent.png"; // adjust the path as necessary


function LoginPage() {
    const { login, currentUser, isLoading } = useFrappeAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState('');

    // Redirect if already logged in
    useEffect(() => {
        if (currentUser) {
            navigate("/", { replace: true });
        }
    }, [currentUser, navigate]);


    // Fetch company info
    const { data: companyData } = useFrappeGetCall("real_estate.services.rest.get_company_info");

    useEffect(() => {
        if (companyData) {
            setCompany(companyData?.message); // safe access
        }
    }, [companyData]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login({ username: email, password });
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            {/* Logo + Company Name */}
            <div className="flex flex-col items-center mb-6">
                <img src={logo} alt="ST" className="w-20 h-20 mb-1" />
                <h1 className="text-2xl font-bold text-center bg-linear-to-r from-orange-500 from-50% to-sky-950 to-50% bg-clip-text text-transparent">
                    {company}
                </h1>
            </div>


            <Card className="w-full max-w-sm">
                <CardHeader>
                    {/* <CardTitle className="text-2xl text-center">
                        {company || ""}
                    </CardTitle> */}
                    <CardDescription className="text-center">
                        Login to access your account.
                    </CardDescription>
                </CardHeader>

                <form onSubmit={handleLogin}>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="text"
                                placeholder="shagize@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {/* Forgot password link */}
                            <div className="text-right my-2">
                                <a
                                    href="/real-estate/forgot-password" // replace with your route
                                    className="text-sm hover:underline"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-2">
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Sign in"}
                        </Button>

                        {/* OR divider */}
                        <div className="flex items-center gap-2 my-2">
                            <hr className="flex-1 border-gray-300" />
                            <span className="text-gray-400 text-sm">or</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* Social login buttons */}
                        <div className="flex gap-2 mt-2">
                            <Button
                                variant="outline"
                                className="flex-1 flex items-center justify-center gap-2"
                                onClick={() => alert("Login with Google")}
                            >
                                <FaGoogle /> Google
                            </Button>

                            <Button
                                variant="outline"
                                className="flex-1 flex items-center justify-center gap-2"
                                onClick={() => alert("Login with GitHub")}
                            >
                                <FaGithub /> GitHub
                            </Button>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}

export default LoginPage;
