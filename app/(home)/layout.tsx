import "@/app/globals.css";

import { Island } from "@/app/(home)/island";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Island />
    </>
  );
}
