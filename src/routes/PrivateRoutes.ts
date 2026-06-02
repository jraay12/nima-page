import { useNavigate } from "react-router";
import { useEffect } from "react";

export const PrivateRoutes = ({ children }: any) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/administrator/login", { replace: true });
    }
  }, [token, navigate]);

  if (!token) return null;

  return children;
};
