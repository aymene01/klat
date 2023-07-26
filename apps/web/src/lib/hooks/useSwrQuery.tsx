import { fetcherQL } from '@klat/toolbox'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useSwrQuery = <T, V extends string>({
  query,
  ...options
}: UseQueryOptions<{ [key in V]: T }, Error> & { query: string }) => {
  return useQuery<{ [key in V]: T }, Error>({
    queryFn: variables => fetcherQL({ query, variables }),
    ...options,
  })
}
