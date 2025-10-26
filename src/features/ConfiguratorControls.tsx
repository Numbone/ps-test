import { QuantityControl } from "@/components/QuantityControl/QuantityControl";
import { SelectControl } from "@/components/SelectControl/SelectControl";
import ArchiveIcon from '@/shared/assets/icon/archive.svg';
import CPUIcon from '@/shared/assets/icon/cpu.svg';
import NetIcon from '@/shared/assets/icon/net.svg';
import NVMEIcon from '@/shared/assets/icon/nvme.svg';
import RAMIcon from '@/shared/assets/icon/ram.svg';
import RouterIpIcon from '@/shared/assets/icon/router-ip.svg';
import RouterIcon from '@/shared/assets/icon/router.svg';
import { Prices, PublicNetworkOption, RouterOption } from "@/shared/types/configurator";


interface ConfiguratorControlsProps {
  cpu: number;
  ramGb: number;
  nvmeGb: number;
  archDiskGb: number;
  publicNetwork: PublicNetworkOption;
  routerIP: number;
  router: RouterOption;
  prices: Prices;
  onCpuChange: (value: number) => void;
  onRamChange: (value: number) => void;
  onNvmeChange: (value: number) => void;
  onArchiveChange: (value: number) => void;
  onPublicNetworkChange: (value: PublicNetworkOption) => void;
  onRouterIPChange: (value: number) => void;
  onRouterChange: (value: RouterOption) => void;
}

export const ConfiguratorControls = ({
  cpu,
  ramGb,
  nvmeGb,
  archDiskGb,
  publicNetwork,
  routerIP,
  router,
  prices,
  onCpuChange,
  onRamChange,
  onNvmeChange,
  onArchiveChange,
  onPublicNetworkChange,
  onRouterIPChange,
  onRouterChange
}: ConfiguratorControlsProps) => (
  <div className="form__grid">
    <QuantityControl
      icon={<CPUIcon />}
      title="Ядра процессора"
      initialValue={cpu}
      unit="тг за ГБ/мес"
      pricePerMonth={prices.cpuPerCore.toString()}
      onChange={onCpuChange}
    />

    <QuantityControl
      icon={<RAMIcon />}
      title="Оперативная память, ГБ"
      initialValue={ramGb}
      unit="тг за ГБ/мес"
      pricePerMonth={prices.ramPerGb.toString()}
      onChange={onRamChange}
    />

    <QuantityControl
      icon={<NVMEIcon />}
      title="Быстрый диск NVME, ГБ"
      initialValue={nvmeGb}
      unit="тг за ГБ/мес"
      pricePerMonth={prices.nvmePerGb.toString()}
      onChange={onNvmeChange}
    />

    <QuantityControl
      icon={<ArchiveIcon />}
      title="Архивный диск, ГБ"
      initialValue={archDiskGb}
      unit="тг за ГБ/мес"
      pricePerMonth={prices.archive.toString()}
      onChange={onArchiveChange}
    />

    <SelectControl
      icon={<NetIcon />}
      title="Публичная сеть"
      pricePerMonth={
        publicNetwork === "order" 
          ? prices.publicNetwork.order.toString() 
          : prices.publicNetwork.notOrder.toString()
      }
      unit="тг/мес"
      value={publicNetwork}
      onChange={value => onPublicNetworkChange(value as PublicNetworkOption)}
      options={[
        { value: "notOrder", label: "Не заказывать" },
        { value: "order", label: "Заказать" }
      ]}
    />

    <QuantityControl
      icon={<RouterIpIcon />}
      title="Маршрутизируемые IP-адреса"
      initialValue={routerIP}
      unit="тг за адрес/мес"
      pricePerMonth={prices.routerIP.toString()}
      onChange={onRouterIPChange}
    />

    <SelectControl
      icon={<RouterIcon />}
      title="Маршрутизатор"
      pricePerMonth={(
        router === "compact" 
          ? prices.router.compact 
          : prices.router.large
      ).toString()}
      unit="тг/мес"
      value={router}
      onChange={value => onRouterChange(value as RouterOption)}
      options={[
        { value: "compact", label: "Compact — 1 vCPU, 512 MB RAM" },
        { value: "large", label: "Large — 2 vCPU, 1 GB RAM" }
      ]}
    />
  </div>
);