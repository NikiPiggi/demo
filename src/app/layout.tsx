import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: "Demo",
  description: "Demo page ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
//