import { redirect, type LoaderFunctionArgs } from "react-router-dom";

import useUserStore from "@/stores/user";

import { AUTH_ROUTES, PRIVATE_ROUTES } from "@/constants/routes";

const authLoader = ({ request }: LoaderFunctionArgs) => {
  const user = useUserStore.getState().user;
  const pathname = new URL(request.url).pathname;

  const isAdminRoute = pathname.startsWith("/admin");
  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isPrivateRoute = PRIVATE_ROUTES.includes(pathname);

  const isCheckoutPage = request.url.includes("/checkout");

  if (isAuthRoute && user) {
    return redirect("/");
  }

  if ((isAdminRoute || isPrivateRoute) && !user) {
    if (isCheckoutPage)
      return redirect(
        "/sign-in?message=Please sign in to checkout&redirectTo=/checkout"
      );

    return redirect("/sign-in");
  }

  if (isAdminRoute && user?.role !== "admin") {
    return redirect("/");
  }

  return null;
};

export default authLoader;
