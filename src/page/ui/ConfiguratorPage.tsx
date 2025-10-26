'use client';

import { useState } from "react";

import "./ConfiguratorPage.scss";
import { Period } from "@/shared/types/configurator";
import { useConfiguratorState } from "../hooks/useConfiguratorState";
import { usePriceCalculation } from "../hooks/usePriceCalculation";
import { PRICES } from "@/shared/types/prices";
import { PeriodSelector } from "@/features/PeriodSelector";
import { ConfiguratorControls } from "@/features/ConfiguratorControls";
import { ConfiguratorActions } from "@/features/ConfiguratorActions";
import { OrderModal } from "@/features/OrderModal";

export default function ConfiguratorPage() {
  const [period, setPeriod] = useState<Period>("hour");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    config,
    setCpu,
    setRamGb,
    setNvmeGb,
    setArchDiskGb,
    setPublicNetwork,
    setRouterIP,
    setRouter
  } = useConfiguratorState();

  const totals = usePriceCalculation(config, PRICES, period);

  const handleOrder = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="configurator">
      <section className="configurator__form form">
        <PeriodSelector 
          period={period} 
          onChange={setPeriod} 
        />

        <ConfiguratorControls
          cpu={config.cpu}
          ramGb={config.ramGb}
          nvmeGb={config.nvmeGb}
          archDiskGb={config.archDiskGb}
          publicNetwork={config.publicNetwork}
          routerIP={config.routerIP}
          router={config.router}
          prices={PRICES}
          onCpuChange={setCpu}
          onRamChange={setRamGb}
          onNvmeChange={setNvmeGb}
          onArchiveChange={setArchDiskGb}
          onPublicNetworkChange={setPublicNetwork}
          onRouterIPChange={setRouterIP}
          onRouterChange={setRouter}
        />

        <ConfiguratorActions
          total={totals.total}
          period={period}
          onOrder={handleOrder}
        />
      </section>

      <OrderModal
        isOpen={isModalOpen}
        total={totals.total}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}