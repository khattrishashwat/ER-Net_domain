import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes/Index";
import Loader from "./Component/loader/Loader";


function App() {
  return (
      <Suspense fallback={<Loader />}>
        <RouterProvider router={routes} />
      </Suspense>
  );
}

export default App;
