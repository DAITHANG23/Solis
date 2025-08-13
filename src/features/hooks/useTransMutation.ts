import {
  useMutation,
  type MutationFunction,
  type UseMutationOptions,
  type UseMutationResult,
} from "@tanstack/react-query";

import { AxiosError } from "axios";
import _get from "lodash/get";
import useNotification from "./useNotification";

export type UseTransMutationOptions<
  TMutationFnData = unknown,
  TError extends AxiosError = AxiosError,
  TVariables = void,
  TContext = unknown,
> = Omit<
  UseMutationOptions<TMutationFnData, TError, TVariables, TContext>,
  "mutationFn" | "mutationKey"
>;

function useTransMutation<
  TMutationFnData = unknown,
  TError extends AxiosError = AxiosError,
  TData = TMutationFnData,
  TVariables = void,
  TContext = unknown,
>(
  mutationFn: MutationFunction<TData, TVariables>,
  {
    onError,
    ...options
  }: UseTransMutationOptions<TData, TError, TVariables, TContext> = {},
  isShowError = true
): UseMutationResult<TData, TError, TVariables, TContext> {
  const { showError } = useNotification();

  return useMutation<TData, TError, TVariables, TContext>({
    mutationFn,
    onError: (error, variables, context) => {
      if (_get(error, "response.status") === 403) return;

      if (isShowError) {
        showError(error.message);
      }

      if (onError) {
        onError(error, variables, context);
      }
    },
    ...options,
  });
}

export default useTransMutation;
