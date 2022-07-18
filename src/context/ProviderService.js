import React from "react";
import { Context } from "./context";
import { ServiceRickAndMorty } from "../service/ServiceRickAndMorty";

export function ProviderService({ children }) {
  return (
    <Context.Provider value={{ service: new ServiceRickAndMorty() }}>
      {children}
    </Context.Provider>
  );
}
