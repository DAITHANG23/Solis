import { GET_PROFILE_KEY } from "@/constants/queryKeys";
import { useMutation, useQuery } from "@tanstack/react-query";
import { userEndpoints, authEndpoints } from "@/api/enpoints";
import { UserProfileResponse } from "@/types";

const useProfile = () => {
  const { data, refetch, isLoading } = useQuery<UserProfileResponse>({
    queryFn: () => userEndpoints.getProfile(),
    queryKey: [GET_PROFILE_KEY],
  });

  const { mutate: profileLogout } = useMutation({ mutationFn: () => authEndpoints.logout() });

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
