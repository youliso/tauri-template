import pageRoute from "@/router/modular/page";
import Router from "@/common/router";

const Routers = new Router(pageRoute);

Routers.onBeforeRoute = (route: Route, params?: any) => {
  console.log(route, params);
  return true;
};

export function routerInit(route: string) {
  Routers.push(route);
}

export default Routers;
