import { Outlet } from "react-router";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { ScrollToTop } from "@/app/components/ScrollToTop";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
