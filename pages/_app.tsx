import Layout from '@/components/Layout'
import { CartProvider } from '@/context/CartContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';


export default function App({ Component, pageProps }: AppProps) {
const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </QueryClientProvider>
    
  )
}
