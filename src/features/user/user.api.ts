import { api } from "../../lib/axios";
import type { LoginInput } from "../../types";

export const login = async (data: LoginInput) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};


export const me = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};
