'use client';

import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/sterling-logo.png"
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster position="top-right" richColors />
        </QueryClientProvider>
      </body>
    </html>
  );
}
