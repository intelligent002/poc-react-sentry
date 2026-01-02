import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: "local",
    tracesSampleRate: 0.0, // not needed for this demo
});
