// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
"use client";
import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { AppShell, Burger } from "@mantine/core";
import { LeftNavbar } from "@/components/LeftNavbar/LeftNavbar";

// export const metadata = {
//   title: 'Surreal World',
//   description: 'I do like surreal',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
            }}
            padding="md"
          >
            <AppShell.Header>
              <Burger opened={true} hiddenFrom="sm" size="sm" />
              <div>Logo</div>
            </AppShell.Header>

            <AppShell.Navbar p="md">
              <LeftNavbar />
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
