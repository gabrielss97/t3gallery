import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Link from "next/link";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b-2 border-gray-200 p-4 text-xl font-bold">
      <div>Gallery</div>

      <div>Sign in</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${GeistSans.variable} flex flex-col gap-4`}
    >
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
