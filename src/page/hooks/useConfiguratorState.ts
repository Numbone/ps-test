import { ConfigState, PublicNetworkOption, RouterOption } from '@/shared/types/configurator';
import { useState } from 'react';


export const useConfiguratorState = () => {
  const [cpu, setCpu] = useState<number>(4);
  const [ramGb, setRamGb] = useState<number>(4);
  const [nvmeGb, setNvmeGb] = useState<number>(10);
  const [archDiskGb, setArchDiskGb] = useState<number>(0);
  const [publicNetwork, setPublicNetwork] = useState<PublicNetworkOption>("notOrder");
  const [routerIP, setRouterIP] = useState<number>(1);
  const [router, setRouter] = useState<RouterOption>("compact");

  const config: ConfigState = {
    cpu,
    ramGb,
    nvmeGb,
    archDiskGb,
    publicNetwork,
    routerIP,
    router
  };

  return {
    config,
    setCpu,
    setRamGb,
    setNvmeGb,
    setArchDiskGb,
    setPublicNetwork,
    setRouterIP,
    setRouter
  };
};