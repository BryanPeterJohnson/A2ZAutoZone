import { createBrowserRouter } from "react-router";
import { Root } from "@/app/components/Root";
import { Home } from "@/app/pages/Home";
import { About } from "@/app/pages/About";
import { Services } from "@/app/pages/Services";
import { BookAppointment } from "@/app/pages/BookAppointment";
import { Contact } from "@/app/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "book", Component: BookAppointment },
      { path: "contact", Component: Contact },
    ],
  },
]);
