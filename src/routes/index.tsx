import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TNCab — Premium Corporate Cab Services in Tamil Nadu" },
      {
        name: "description",
        content:
          "TNCab delivers premium corporate cab services across Tamil Nadu: airport transfers, corporate travel, employee transport and outstation trips.",
      },
      { property: "og:title", content: "TNCab — Premium Corporate Cab Services in Tamil Nadu" },
      {
        property: "og:description",
        content: "Airport transfers, corporate travel, employee transport and outstation trips across Tamil Nadu.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/tncab/index.html"
      title="TNCab"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
        display: "block",
      }}
    />
  );
}
