"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AyurFresh - Agricultural Solutions</title>
        <meta
          name="description"
          content="Improving the social and economic status of small and marginal farmers through sustainable agricultural practices and modern farming technology."
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
