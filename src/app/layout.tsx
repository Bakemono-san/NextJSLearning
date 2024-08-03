import "./globals.css";
import SideMenu from "@/components/SideMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-800 flex">
        <SideMenu />
        {children}
        </body>
    </html>
  );
}
