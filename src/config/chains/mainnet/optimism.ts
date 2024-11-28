import { EndpointId } from "@layerzerolabs/lz-definitions";

import { type LayerZeroChain } from "../types";

export const optimism: LayerZeroChain = {
  id: 10,
  name: "Optimism",
  icon: "https://icons-ckg.pages.dev/lz-scan/networks/optimism.svg",
  endpoint: EndpointId.OPTIMISM_V2_MAINNET,
  rpc: "https://10.rpc.thirdweb.com",
};