import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
