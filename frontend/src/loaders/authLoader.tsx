import { redirect, type LoaderFunctionArgs } from "react-router-dom";

import useUserStore from "@/stores/user";

import { AUTH_ROUTES, PRIVATE_ROUTES } from "@/constants/routes";

const authLoader = ({ request }: LoaderFunctionArgs) => {
  const token = useUserStore.getState().token;
  const pathname = new URL(request.url).pathname;

  const isAdminRoute = pathname.startsWith("/admin");
  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isPrivateRoute = PRIVATE_ROUTES.includes(pathname);

  const isCheckoutPage = request.url.includes("/checkout");

  if (isAuthRoute && token) {
    return redirect("/");
  }

  if ((isAdminRoute || isPrivateRoute) && !token) {
    if (isCheckoutPage)
      return redirect(
        "/sign-in?message=Please sign in to checkout&redirectTo=/checkout"
      );

    return redirect("/sign-in");
  }

  return null;
};

export default authLoader;
