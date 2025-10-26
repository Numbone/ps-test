import { Prices } from "./configurator";

export const PRICES: Prices = {
  cpuPerCore: 1900,
  ramPerGb: 5200,
  nvmePerGb: 160,
  archive: 10,
  publicNetwork: {
    order: 3000,
    notOrder: 0
  },
  routerIP: 1000,
  router: {
    compact: 3000,
    large: 6000,
  }
};

export const PERIOD_MULTIPLIER = {
  hour: 1,
  month: 30
} as const;