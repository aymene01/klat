import { fetcherQL } from '@klat/toolbox'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export const useSwrMutation = <T, K, V extends string>({
  query,
  ...options
}: UseMutationOptions<{ [key in V]: T }, Error, K, unknown> & { query: string }) =>
  useMutation<{ [key in V]: T }, Error, K>({
    mutationFn: variables => fetcherQL({ query, variables }),
    ...options,
  })
