import '@klat/ui/src/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastProvider } from '@/lib/context/toast'
import { UserProvider } from '@/lib/context/user'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ToastProvider>
    </QueryClientProvider>
  )
}
