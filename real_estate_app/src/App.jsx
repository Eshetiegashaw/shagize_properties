import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/login";
import HomePage from "@/pages/home";
import { ProtectedRoute } from "@/utils/protectedRoute";
import { RedirectIfAuth } from "@/utils/redirectAuth";
import NotFoundPage from "@/pages/404";
import Layout from "@/pages/layout";
import Dashboard from "@/pages/reports/dashboard";

function App() {

  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH || '/'}>
      <Routes>
        {/* Home is protected */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route
          path="/login"
          element={
            <RedirectIfAuth>
              <LoginPage />
            </RedirectIfAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
