import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";

const Main = lazy(() => import("./pages/Main"));
const Quiz = lazy(() => import("./pages/Quiz"));

export default function Router() {
  const loading = () => <Loading />;

  return (
    <Suspense fallback={loading()}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Suspense>
  );
}
