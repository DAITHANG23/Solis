import { AxiosError } from "axios";
import {
  useQuery,
  type QueryFunction,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
// import _isEmpty from 'lodash/isEmpty'
// import { ErrorResponse } from '@/types/models'

// const getErrorMessages = (error: AxiosError<ErrorResponse>) => {
//   const { status, data } = error.response || {}
//   let errorMessages = 'Something went wrong! Please try again.'

//   if (status === 400) {
//     if (data?.message) {
//       errorMessages = data.message
//     }

//     if (!_isEmpty(data?.error)) {
//       errorMessages = ''
//       const messages = Object.values(data.error)
//       // biome-ignore lint/complexity/noForEach: <explanation>
//       messages.forEach(mess => {
//         errorMessages += `${mess} `
//       })
//     }
//   }

//   return errorMessages
// }

export type UseTransQueryOptions<
  TQueryFnData = unknown,
  TError extends AxiosError = AxiosError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  "queryKey" | "queryFn"
>;

function useTransQuery<
  TQueryFnData = unknown,
  TError extends AxiosError = AxiosError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options: UseTransQueryOptions<TQueryFnData, TError, TData, TQueryKey> = {}
): UseQueryResult<TData, TError> {
  return useQuery<TQueryFnData, TError, TData, TQueryKey>({
    queryKey,
    queryFn,
    ...options,
  });
}

export default useTransQuery;
