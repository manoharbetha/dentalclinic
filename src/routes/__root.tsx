import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import {
  Navbar,
  Footer,
  EmergencyBanner,
  FloatingWhatsApp,
  BackToTop,
  LeadPopup,
  StyleInject,
} from "../components/Layout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-navy">Page not found</h2>
        <p className="mt-2 text-sm text-charcoal/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-gold"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display font-semibold tracking-tight text-navy">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-charcoal/70">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-gold"
          >
            Try again
          </button>
          <Link
            to="/"
            className="btn-outline-ivory border-navy text-navy hover:bg-navy hover:text-ivory"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Prasanthi's Smile Care | Advanced Dental Clinic" },
      { name: "description", content: "Premium dental clinic providing orthodontics, cosmetic dentistry, implants, root canal treatment, smile design, pediatric dentistry and comprehensive oral healthcare." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "https://res.cloudinary.com/dmp1d9o5w/image/upload/v1783102861/logo_zemlw8.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased text-charcoal bg-background min-h-screen flex flex-col">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <StyleInject />
      <EmergencyBanner />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
      <LeadPopup />
    </QueryClientProvider>
  );
}
