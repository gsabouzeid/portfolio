import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garrett's Portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "#07232e",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#07232e",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
