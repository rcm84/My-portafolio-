import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://raymercastaneda.dev"),
  title: {
    default: "Raymer Castañeda — AI Systems Engineer",
    template: "%s | Raymer Castañeda",
  },
  description:
    "Full-stack engineer building AI-powered systems, automation and API-driven platforms.",
  openGraph: {
    title: "Raymer Castañeda — AI Systems Engineer",
    description:
      "Full-stack engineer building AI-powered systems, automation and API-driven platforms.",
    url: "https://raymercastaneda.dev",
    siteName: "Raymer Castañeda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymer Castañeda — AI Systems Engineer",
    description:
      "Full-stack engineer building AI-powered systems, automation and API-driven platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-night text-[#e7e7ea] antialiased">
        {children}
      </body>
    </html>
  );
}
