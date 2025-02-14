import Cookies from "js-cookie";

export function handleGlobalError(error: any) {
  if (error.status === 401 || error.status === 403) {
    if (typeof window !== "undefined") {
      // Client-side redirection
      console.log("Redirecting to login page", window.location.href);
      Cookies.set("last_route", window.location.href);
      // signIn("auth0", {
      //   callbackUrl: "/verifying",
      //   redirect: true,
      // });
    }
  }
}
