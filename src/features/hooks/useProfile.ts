import { GET_PROFILE_KEY } from "@/constants/queryKeys";
import { useMutation, useQuery } from "@tanstack/react-query";
import { userEndpoints, authEndpoints } from "@/api/enpoints";
import { UserProfileResponse } from "@/types";
import { clearJWTCookies } from "@/utils/authService";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

const useProfile = () => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const { data, refetch, isLoading } = useQuery<UserProfileResponse>({
    queryFn: () => userEndpoints.getProfile(),
    queryKey: [GET_PROFILE_KEY],
    staleTime: Number.POSITIVE_INFINITY,
    enabled: !!isAuthenticated,
  });

  const { mutate: profileLogout } = useMutation({
    mutationFn: () => authEndpoints.logout(),
    onSuccess: () => {
      clearJWTCookies("access_token");
      clearJWTCookies("refresh_token");
      useAuthStore.getState().setIsAuthenticated(false);
      router.push("/login");
    },
  });

  const onRefetch = () => {
    if (!data) refetch();
  };

  return {
    onRefetch,
    data,
    isLoading,
    profileLogout,
  };
};

export default useProfile;
