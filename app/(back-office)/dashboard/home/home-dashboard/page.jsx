import React from "react";
import DashboardBanner from "@/components/dashboard/banner/DashboardBanner";
import SalesOverview from '@/components/dashboard/SalesOverview'
export default function page() {
  return (
    <>
      <DashboardBanner />
      <SalesOverview />
      <div>Home Dashboard</div>
    </>
  );
}
