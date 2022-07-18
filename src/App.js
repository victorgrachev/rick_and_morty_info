import "materialize-css/dist/css/materialize.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Router } from "./route";
import { HashRouter } from "react-router-dom";
import { ProviderService } from "./context/ProviderService";

export function App() {
  return (
    <ProviderService>
      <HashRouter>
        <Navbar />
        <Router />
      </HashRouter>
    </ProviderService>
  );
}
