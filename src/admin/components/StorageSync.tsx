"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useContentStore, useAuthStore, useThemeStore } from "@/admin/store/adminStore";

export default function StorageSync() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/administrator") || false;
  const previousIsAdmin = useRef(isAdminRoute);

  useEffect(() => {
    // If user navigates between Admin panel and Main UI in the same tab,
    // we must force Zustand to re-evaluate the local storage keys,
    // otherwise it will keep the Draft state in RAM.
    if (isAdminRoute !== previousIsAdmin.current) {
      setTimeout(() => {
        useContentStore.persist.rehydrate();
        useThemeStore.persist.rehydrate();
      }, 0);
      previousIsAdmin.current = isAdminRoute;
    }
  }, [isAdminRoute]);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      // Rehydrate Zustand stores whenever localStorage changes in another tab
      if (e.key === "admin-content" || e.key === "admin-content-published") {
        useContentStore.persist.rehydrate();
      } else if (e.key === "admin-theme" || e.key === "admin-theme-published") {
        useThemeStore.persist.rehydrate();
      } else if (e.key === "admin-auth") {
        useAuthStore.persist.rehydrate();
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return null;
}
