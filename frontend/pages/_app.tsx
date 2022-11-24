import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "../src/components/AppContext";


const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </QueryClientProvider>
  )
}

export default App