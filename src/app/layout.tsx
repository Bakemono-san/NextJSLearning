import "./globals.css";
import SideMenu from "@/components/SideMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex-col h-dvh sm:flex sm:flex-row">
        <SideMenu />
        {children}
        </body>
    </html>
  );
}
