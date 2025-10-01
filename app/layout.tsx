import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { roboto, poppins, inter, dmSans, lateef } from "@/config/fonts";
import { MyNavbar } from "@/components/sections/navbar/MyNavbar";
import Footer from "@/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "bg-background text-foreground font-roboto min-h-svh antialiased",
          roboto.variable,
          poppins.variable,
          inter.variable,
          dmSans.variable,
          lateef.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex h-svh flex-col">
            <MyNavbar />
            {/* <main className="container mx-auto max-w-[1220px] flex-grow pt-16"> */}
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
