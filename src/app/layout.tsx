"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const access_token = Cookies.get("accessToken");
    if (!pathname.includes("auth") && !access_token) {
      setLoading(false);
      window.location.href = "/auth/signin";
      return;
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <QueryClientProvider client={queryClient}>
            {children}
            <ToastContainer />
          </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
