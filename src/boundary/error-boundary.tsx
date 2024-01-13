import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorFallback: React.FC<void> = () => {
  const error = useRouteError();
  // Add if dev mode only to this error log && send to 3rd party logger like Sentry
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.["statusText"] || error?.["message"]}</i>
      </p>
    </div>
  );
};
