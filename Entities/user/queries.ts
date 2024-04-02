import { userApi } from "@/Shared/api/modules/user";
import { UseQueryOptions, useQueryClient } from "@tanstack/react-query";

const userQueryKey = "user";

export const usersListQuery = () =>
  ({
    queryKey: [userQueryKey, "list"],
    queryFn: () => userApi.getUsers(),
  }) satisfies UseQueryOptions;

export const userByIdQuery = (id: string) =>
  ({
    queryKey: [userQueryKey, "byId", id],
    queryFn: () => userApi.getUser(id).then((r) => r ?? null),
  }) satisfies UseQueryOptions;


export const useInvalidateUsers = () => {
  const queryClient = useQueryClient();

  return () =>
    queryClient.invalidateQueries({
      queryKey: [userQueryKey],
    });
};
