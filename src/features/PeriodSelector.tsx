import { Period } from '@/shared/types/configurator';
import { Segmented, Typography } from 'antd';


interface PeriodSelectorProps {
  period: Period;
  onChange: (period: Period) => void;
}

export const PeriodSelector = ({ period, onChange }: PeriodSelectorProps) => (
  <div className="period">
    <Typography.Title level={5} className="form__title">
      Ресурсы вашего облака Virtuozzo PaaS
    </Typography.Title>
    <Segmented
      value={period}
      style={{ marginBottom: 16 }}
      onChange={value => onChange(value as Period)}
      options={[
        { label: 'в час', value: 'hour' },
        { label: 'в месяц', value: 'month' }
      ]}
    />
  </div>
);