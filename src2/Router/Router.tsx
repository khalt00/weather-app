import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";

import routeConfig, { RouteParams } from "./routerConfig";

const Router = (): JSX.Element => {
  const renderRoutes = (routeArray: Array<RouteParams>): Array<JSX.Element> => {
    return routeArray.map((route: RouteParams) => (
      <Route
        key={route.path}
        path={route.path}
        element={<RequireAuth>{route.main}</RequireAuth>}
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routeConfig)}</Routes>
    </BrowserRouter>
  );
};

export default Router;
