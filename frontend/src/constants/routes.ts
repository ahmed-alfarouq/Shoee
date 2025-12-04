/**
 * Routes that require user to be authenticated
 */
export const PRIVATE_ROUTES = ["/account", "/checkout"];

/**
 * Routes related to authentication (sign-in, sign-up, ..etc)
 */
export const AUTH_ROUTES = [
  "/sign-in",
  "/sign-up",
  "/verify-email",
  "/reset-password",
  "/forgot-password",
];
