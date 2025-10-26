import { InputMask } from '@/shared/ui/InputMask'
import React, { FC, ReactNode } from 'react'
import { Select } from 'antd';
import styles from './SelectControl.module.scss';

interface Props {
    icon: ReactNode;
    title: string;
    hintText?: string;
    value: string;
    unit: string;
    pricePerMonth: string;
    onChange?: (value: string) => void;
    options?: {
        value: string;
        label: string;
    }[] | undefined;
    ariaLabel?: string;
    disabled?: boolean;
}

export const SelectControl: FC<Props> = ({
    icon,
    title,
    value,
    unit,
    pricePerMonth,
    onChange,
    hintText,
    options,
    ariaLabel,
    disabled = false
}) => {
    return (
        <InputMask
            icon={icon}
            title={title}
            unit={unit}
            pricePerMonth={pricePerMonth}
            hintText={hintText}
        >
            <Select
                value={value}
                onChange={onChange}
                options={options}
                aria-label={ariaLabel || `${title} selector`}
                className={styles.form__select}
                style={{ width: "100%", padding: 0 }}
                disabled={disabled}
                showSearch
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                getPopupContainer={(trigger) => trigger.parentElement || document.body}
                notFoundContent="Нет результатов"
                placeholder={`Выберите ${unit}`}
                tabIndex={0}
                aria-describedby={hintText ? `${ariaLabel}-hint` : undefined}
            />
        </InputMask>
    )
}