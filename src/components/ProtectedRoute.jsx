import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loading from "./Loading";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  if (!user) return <Navigate to="/login" />;

  if (user.role < 1) return <Navigate to="/login" />;

  return <>{children}</>;
}
