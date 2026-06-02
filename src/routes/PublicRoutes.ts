import { useNavigate } from "react-router";
import { useEffect } from "react";

export const PublicRoutes = ({ children }: any) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  if (token) return null;

  return children;
};
