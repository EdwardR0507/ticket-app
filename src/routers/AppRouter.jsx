import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Layout = lazy(() => import("../layout/Layout"));
const Login = lazy(() => import("../pages/Login"));
const Queue = lazy(() => import("../pages/Queue"));
const CreateTicket = lazy(() => import("../pages/CreateTicket"));
const Desk = lazy(() => import("../pages/Desk"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/queue" element={<Queue />} />
            <Route path="/create" element={<CreateTicket />} />
            <Route path="/desk" element={<Desk />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
