import React from 'react';
import { I18n } from 'react-i18next';
import isFiatOrder from 'Utils/isFiatOrder';
import styles from './MinMax.scss';

const MinMax = props => {
  if (props.order && isFiatOrder(props.order) && props.type === 'Deposit') return null;

  return (
    <I18n ns="translations">
      {t => (
        <div className={`${styles.minmax} ${props.home ? styles.home : ''}`}>
          <p className={props.min > props.amount && props.amount !== '...' ? 'error' : ''}>
            {t('Min')}: {props.min}
          </p>

          <p className={props.max < props.amount && props.amount !== '...' ? 'error' : ''}>
            {t('Max')}: {props.max}
          </p>
        </div>
      )}
    </I18n>
  );
};

export default MinMax;