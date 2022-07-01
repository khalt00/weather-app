import { Dashboard } from "Pages/Dashboard/Dashboard";
import { Login } from "Pages/Login/Login";

export interface RouteParams {
  path: string;
  main: JSX.Element;
  children?: Array<this>;
}

const createRoute = (
  path: string,
  main: JSX.Element,
  children?: Array<RouteParams>
): RouteParams => {
  return { path, main, children };
};

const routeConfig: Array<RouteParams> = [
  createRoute("/", <Dashboard />),
  createRoute("/login", <Login />),
  // {path: '*', main: <PageNotFound />}
];

export default routeConfig;
