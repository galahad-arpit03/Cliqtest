import React from "react";
import AdminEditOverlay from "@/admin/components/AdminEditOverlay";
import LandingPage from "@/components/landing/LandingPage/LandingPage";

export default function AdminHome() {
  return (
    <div className="relative">
      <AdminEditOverlay page="Home">
        <LandingPage />
      </AdminEditOverlay>
    </div>
  );
}
