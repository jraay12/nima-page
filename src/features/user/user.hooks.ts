import { useMutation, useQuery } from "@tanstack/react-query";
import { login, me } from "./user.api";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useFetchMe = () => {
  return useQuery({
    queryFn: me,
    queryKey: ["me"],
    retry: false
  });
};
