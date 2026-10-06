import "./globals.scss";
import { Syne, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { navMenus } from "@/data/navMenus";
import Strings from "@/constants/strings";

config.autoAddCss = false;

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${Strings.fullName} · Backend Engineer | Immediate Joiner`,
  description: `${Strings.seeking}. ${Strings.tagline} ${Strings.openLocationsLabel}.`,
  openGraph: {
    title: `${Strings.fullName} · Backend Engineer | Immediate Joiner`,
    description: `${Strings.seeking}. ${Strings.openLocationsLabel}.`,
    type: "website",
  },
};

const SiteNav = dynamic(() => import("@/components/navbar/SiteNav"));
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));
const AskAboutMeWidget = dynamic(() => import("@/components/common/AskAboutMeWidget"));

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <div className="grain" aria-hidden />
        <SiteNav navItems={navMenus} />
        <main className="relative z-[2] w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <ScrollToTop />
        <AskAboutMeWidget />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
