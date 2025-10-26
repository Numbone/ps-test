import { Period } from '@/shared/types/configurator';
import { Button } from 'antd';


interface ConfiguratorActionsProps {
  total: number;
  period: Period;
  onOrder: () => void;
}

export const ConfiguratorActions = ({ total, period, onOrder }: ConfiguratorActionsProps) => (
  <div className="form__actions">
    <Button type="primary" onClick={onOrder}>
      Заказать
    </Button>
    <div className="form__total">
      <span className="form__total-value">
        за <strong>{total.toLocaleString()}</strong> тг/{period === "hour" ? "час" : "месяц"}
      </span>
    </div>
  </div>
);