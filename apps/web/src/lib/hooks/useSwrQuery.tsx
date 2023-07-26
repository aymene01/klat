import { fetcherQL } from '@/lib/http/request'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useSwrQuery = <T, V extends string>({
  query,
  ...options
}: UseQueryOptions<{ [key in V]: T }, Error> & { query: string }) =>
  useQuery<{ [key in V]: T }, Error>({
    queryFn: variables => fetcherQL({ query, variables }),
    ...options,
  })
