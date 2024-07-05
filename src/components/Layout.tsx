import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartTab from "./CartTab";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="max-w-full">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <CartTab />
      {/* <Footer /> */}
    </>
  );
}
