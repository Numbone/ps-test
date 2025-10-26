import MinusIcon from '@/shared/assets/icon/minus.svg';
import PlusIcon from '@/shared/assets/icon/plus.svg';
import { InputMask } from '@/shared/ui/InputMask';
import { FC, ReactNode, useState, useRef, KeyboardEvent } from 'react';
import styles from './QuantityControl.module.scss';

interface QuantityControlProps {
  icon: ReactNode;
  title: string;
  hintText?: string;
  initialValue?: number;
  unit: string;
  pricePerMonth: string;
  minValue?: number;
  maxValue?: number;
  onChange?: (value: number) => void;
}

export const QuantityControl: FC<QuantityControlProps> = ({
  icon,
  title,
  initialValue = 1,
  unit,
  pricePerMonth,
  minValue = 1,
  maxValue,
  onChange,
  hintText
}) => {
  const [value, setValue] = useState<number>(initialValue);
  const [inputValue, setInputValue] = useState<string>(String(initialValue));
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateValue = (newValue: number): void => {
    const clampedValue = Math.max(minValue, maxValue !== undefined ? Math.min(newValue, maxValue) : newValue);
    setValue(clampedValue);
    setInputValue(String(clampedValue));
    onChange?.(clampedValue);
  };

  const handleIncrement = (): void => {
    const newValue = maxValue ? Math.min(value + 1, maxValue) : value + 1;
    updateValue(newValue);
  };

  const handleDecrement = (): void => {
    const newValue = Math.max(value - 1, minValue);
    updateValue(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) {
      setInputValue(input);
    }
  };

  const handleInputBlur = (): void => {
    setIsEditing(false);
    const numValue = parseInt(inputValue, 10);
    
    if (isNaN(numValue) || inputValue === '') {
      setInputValue(String(value));
    } else {
      updateValue(numValue);
    }
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    } else if (e.key === 'Escape') {
      setInputValue(String(value));
      setIsEditing(false);
      inputRef.current?.blur();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      handleIncrement();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleDecrement();
    }
  };

  const handleValueClick = (): void => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.select(), 0);
  };

  return (
    <InputMask
      icon={icon}
      title={title}
      unit={unit}
      pricePerMonth={pricePerMonth}
      hintText={hintText}
    >
      <>
        <button
          onClick={handleDecrement}
          disabled={value <= minValue}
          className={styles.controlButton}
          aria-label="Уменьшить"
          tabIndex={0}
        >
          <MinusIcon />
        </button>

        <div className={styles.valueDisplay}>
          {isEditing ? (
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              className={styles.valueInput}
              aria-label={`${unit}`}
              autoFocus
            />
          ) : (
            <span 
              className={styles.value}
              onClick={handleValueClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleValueClick();
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${unit}`}
            >
              {value}
            </span>
          )}
        </div>

        <button
          onClick={handleIncrement}
          disabled={maxValue !== undefined && value >= maxValue}
          className={styles.controlButton}
          aria-label="Увеличить"
          tabIndex={0}
        >
          <PlusIcon />
        </button>
      </>
    </InputMask>
  );
};