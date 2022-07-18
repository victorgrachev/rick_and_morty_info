import { useEffect, useState } from "react";
import { useService } from "./useService";

export function usePages() {
  const [countPages, setCountPages] = useState(0);
  const service = useService();

  useEffect(() => {
    service.getCountPages().then((count) => setCountPages(count));
  }, []);

  return countPages;
}
