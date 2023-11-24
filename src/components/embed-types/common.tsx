import { Link } from "@chakra-ui/react";

import OpenGraphCard from "../open-graph-card";
import OpenGraphLink from "../open-graph-link";

export function renderGenericUrl(match: URL) {
  return (
    <Link href={match.toString()} isExternal color="blue.500">
      {match.toString()}
    </Link>
  );
}

export function renderOpenGraphUrl(match: URL, isEndOfLine: boolean) {
  return isEndOfLine ? <OpenGraphCard url={match} /> : <OpenGraphLink url={match} />;
}
