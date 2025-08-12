import type { Metadata } from "next";
import "../styles/index.css";

import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClientProviders } from "./_providers/ClientProviders";

export const metadata: Metadata = {
  title: "Indosukuk",
  description: "Indosukuk Dapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientProviders>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </ClientProviders>
    </html>
  );
}