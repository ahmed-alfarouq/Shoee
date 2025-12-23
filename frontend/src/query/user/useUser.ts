import { useQuery } from "@tanstack/react-query";

import userApiClient from "@/services/userApiClient";

import type { User } from "@/types/index.types";

const fetchUser = async () => {
  const res = await userApiClient.get("/user");

  return res.data.user as User;
};

const useUser = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: async () => await fetchUser(),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

export default useUser;
