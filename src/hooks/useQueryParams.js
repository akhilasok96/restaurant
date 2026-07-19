import { useLocation } from "react-router";

export function useQueryParams() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pageIndex = queryParams.get("pageIndex") || 1;
  const pageSize = queryParams.get("pageSize") || 10;

  return { pageIndex, pageSize };
}
