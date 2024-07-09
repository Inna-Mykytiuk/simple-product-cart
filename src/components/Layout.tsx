import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import CartTab from "./CartTab";

interface RootState {
  cart: {
    statusTab: boolean;
  };
}

export default function Layout() {
  const statusTabCart = useSelector((store: RootState) => store.cart.statusTab);

  return (
    <>
      <Header />
      <main
        className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56"}`}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <CartTab />
      {/* <Footer /> */}
    </>
  );
}
