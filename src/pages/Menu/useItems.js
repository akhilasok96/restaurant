import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getMenuItems } from "@/services/apiRestaurant";
import { useQueryParams } from "@/hooks/useQueryParams";

export function useItems() {
  const { pageIndex, pageSize } = useQueryParams();
  const { data, isPending, error, isFetching } = useQuery({
    queryKey: ["menu", pageIndex, pageSize],
    queryFn: () => getMenuItems(pageIndex, pageSize),
    placeholderData: keepPreviousData,
  });

  return { data, isPending, error, isFetching };
}
