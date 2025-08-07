import { useSearchParams } from "react-router-dom";

function useUrlPosaition() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return [lat, lng];
}

export { useUrlPosaition };
