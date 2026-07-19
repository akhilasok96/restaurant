import { capitalizeFirstLetter } from "@/utils/helpers";
import { useLocation } from "react-router";

export function useLocationTitle() {
  const location = useLocation();

  const segment =
    location?.pathname?.split("/")?.filter((item) => Boolean(item))[0] ||
    "menu";
  const title = capitalizeFirstLetter(segment);

  return { title };
}
