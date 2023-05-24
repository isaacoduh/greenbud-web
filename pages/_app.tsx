import Layout from '@/components/Layout'
import { CartProvider } from '@/context/CartContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import withAuthentication from '@/components/withAuthentication';



export default function App({ Component, pageProps }: AppProps) {
const queryClient = new QueryClient();
// const AuthenticatedComponent = withAuthentication(Component);
  return (
    <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Layout>
            {/* <AuthenticatedComponent {...pageProps} /> */}
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
    </QueryClientProvider>
    
  )
}
