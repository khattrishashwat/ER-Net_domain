import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Loader from "../Component/loader/Loader";
import Homes from "../Component/pages/homes/Home";

// Lazy load layout components
const Layout = lazy(() => import("../Component/Layout/Layout"));
const NotFound = lazy(() => import("../Component/pages/common/NotFound"));

const LazyComponent = (Component) => (props) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

const AppLayout = ({ children }) => (
  <Suspense fallback={<Loader />}>
    <Layout>{children}</Layout>
  </Suspense>
);

const WithLayout = ({ component: Component }) => (
  <AppLayout>
    <Component />
  </AppLayout>
);

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<WithLayout component={Homes} />} />

      <Route path="/load" element={<WithLayout component={Loader} />} />
      <Route path="*" element={<LazyComponent component={NotFound} />} />
    </>
  ),
  {
    basename: "/",
  }
);

export default routes;
