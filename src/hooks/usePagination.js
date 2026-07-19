import { useSearchParams } from "react-router";

export function usePagination(metaData = {}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    pagination: {
      totalPages,
      totalItems,
      pageSize,
      hasNext,
      hasPrevious,
      currentPage,
      isFirstPage,
      isLastPage,
    },
  } = metaData;

  const urlPageIndex = Number(searchParams.get("pageIndex")) || 1;
  const urlPageSize = Number(searchParams.get("pageSize")) || 10;

  return {
    searchParams,
    setSearchParams,
    urlPageIndex,
    urlPageSize,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    hasNext,
    hasPrevious,
    isFirstPage,
    isLastPage,
  };
}
