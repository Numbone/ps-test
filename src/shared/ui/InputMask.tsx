import QuestionIcon from '@/shared/assets/icon/question.svg';
import { Tooltip } from 'antd';
import { FC, ReactNode } from 'react';
import styles from './InputMask.module.scss';
interface InputMaskProps {
  icon: ReactNode;
  title: string;
  hintText?: string;
  unit: string;
  pricePerMonth: string;
  children: ReactNode;
}

export const InputMask: FC<InputMaskProps> = ({
  icon,
  title,
  unit,
  pricePerMonth,
  hintText,
children
}) => {
 return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          className={styles.iconWrapper}
        >
          {icon && icon}
        </div>
        <fieldset className={styles.controlWrapper}>
          <legend className={styles.header}>
            <span className={styles.title}>{title}</span>
            {
              hintText && (
                <Tooltip title={hintText}>
                  <QuestionIcon />
                </Tooltip>
              )
            }
          </legend>
            {children}
        </fieldset>
      </div>
      <div className={styles.priceWrapper}>
        <span className={styles.price}>
          <strong>{pricePerMonth}</strong> {unit}
        </span>
      </div>
    </div>
  );
};