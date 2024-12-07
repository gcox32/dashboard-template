'use client';

import localFont from "next/font/local";
import { ThemeProvider } from "@/src/contexts/ThemeContext";
import Navigation from "@/src/components/layout/Navigation";
import Footer from "@/src/components/layout/Footer";
import { SidebarProvider, useSidebar } from "@/src/contexts/SidebarContext";
import { SearchProvider } from "@/src/contexts/SearchContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const user = {
  name: 'Demo Account',
  backgroundImage: 'https://ui-avatars.com/api/?name=Demo+Account&background=random&color=fff&size=100.png'
};

function MainContent({ children }: { children: React.ReactNode }) {
  const { isExpanded } = useSidebar();

  return (
    <div className={`app-container ${isExpanded ? 'sidebar-expanded' : ''}`}>
      <Navigation user={user} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <SidebarProvider>
            <SearchProvider>
              <MainContent>
                {children}
              </MainContent>
            </SearchProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 