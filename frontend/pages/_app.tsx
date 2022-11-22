import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
      <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
      </QueryClientProvider>
  )
}

export default App