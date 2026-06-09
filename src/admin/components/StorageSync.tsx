"use client";

import { useEffect } from "react";
import { useContentStore, useAuthStore, useThemeStore } from "@/admin/store/adminStore";

export default function StorageSync() {
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      // Rehydrate Zustand stores whenever localStorage changes in another tab
      if (e.key === "admin-content") {
        useContentStore.persist.rehydrate();
      } else if (e.key === "admin-theme") {
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
