import React from "react";
import HomeNav from '@/components/dashboard/home/HomeNav'
export default function Layout({ children }) {
  return (
    <>
      <HomeNav />
      <div>{children}</div>
    </>
  );
}
