"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from "@privy-io/wagmi";
import { wagmiConfig } from "../_config/wagmiConfig";
import { useMemo } from 'react';
import PrivyProviders from './PrivyProvider';

interface ClientProvidersProps {
  children: React.ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <PrivyProviders>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProviders>
  );
} 