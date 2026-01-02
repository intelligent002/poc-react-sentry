import * as Sentry from "@sentry/react";

export default function App() {
    return (
        <div style={{ padding: 24 }}>
            <h2>Sentry test</h2>

            <button
                onClick={() => {
                    throw new Error("Demo uncaught error (should appear in Sentry)");
                }}
            >
                Throw uncaught error
            </button>

            <button
                style={{ marginLeft: 12 }}
                onClick={() => {
                    try {
                        throw new Error("Demo handled error");
                    } catch (e) {
                        Sentry.captureException(e);
                        alert("Sent handled exception to Sentry.");
                    }
                }}
            >
                Capture handled error
            </button>
        </div>
    );
}
