import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contacts from "./pages/contacts/Contacts";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Invoices from "./pages/invoices/Invoices";
import Form from "./pages/form/Form";
import Calendar from "./pages/calendar/Calendar";
import Faq from "./pages/faq/Faq";
import Barchat from "./pages/barchat/Barchat";
import Piechart from "./pages/piechart/Piechart";
import Linechart from "./pages/linechart/Linechart";
import Geography from "./pages/geography/Geography";
import NotFound from "./pages/notfound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />

      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Barchat />} />
      <Route path="piechart" element={<Piechart />} />
      <Route path="line" element={<Linechart />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
