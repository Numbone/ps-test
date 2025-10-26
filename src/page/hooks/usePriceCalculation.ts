import { CalculatedTotals, ConfigState, Period, Prices } from '@/shared/types/configurator';
import { useMemo } from 'react';


export const usePriceCalculation = (
  config: ConfigState,
  prices: Prices,
  period: Period
): CalculatedTotals => {
  const multiplier = period === "month" ? 30 : 1;

  return useMemo(() => {
    const cpuSum = config.cpu * prices.cpuPerCore;
    const ramSum = config.ramGb * prices.ramPerGb;
    const nvmeSum = config.nvmeGb * prices.nvmePerGb;
    const archSum = config.archDiskGb * prices.archive;
    const pubNet = config.publicNetwork === "order" 
      ? prices.publicNetwork.order 
      : prices.publicNetwork.notOrder;
    const routerPrice = config.router === "compact" 
      ? prices.router.compact 
      : prices.router.large;
    const routerPriceIP = config.routerIP * prices.routerIP;
    
    const subtotal = cpuSum + ramSum + nvmeSum + archSum + pubNet + routerPrice + routerPriceIP;
    const total = Math.round(subtotal / 30 * multiplier);

    return { 
      cpuSum, 
      ramSum, 
      nvmeSum, 
      archSum, 
      pubNet, 
      routerPrice, 
      routerPriceIP,
      subtotal, 
      total 
    };
  }, [config, prices, multiplier]);
};