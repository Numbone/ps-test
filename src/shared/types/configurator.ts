export type Period = "hour" | "month";
export type PublicNetworkOption = "order" | "notOrder";
export type RouterOption = "compact" | "large";

export interface Prices {
  cpuPerCore: number;
  ramPerGb: number;
  nvmePerGb: number;
  archive: number;
  publicNetwork: {
    order: number;
    notOrder: number;
  };
  routerIP: number;
  router: {
    compact: number;
    large: number;
  };
}

export interface ConfigState {
  cpu: number;
  ramGb: number;
  nvmeGb: number;
  archDiskGb: number;
  publicNetwork: PublicNetworkOption;
  routerIP: number;
  router: RouterOption;
}

export interface CalculatedTotals {
  cpuSum: number;
  ramSum: number;
  nvmeSum: number;
  archSum: number;
  pubNet: number;
  routerPrice: number;
  routerPriceIP: number;
  subtotal: number;
  total: number;
}