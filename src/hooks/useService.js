import { useContext } from "react";
import { Context } from "../context/context";

export function useService() {
  return useContext(Context)?.service;
}
