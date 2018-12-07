import React from 'react';
import OrderLinks from '../OrderLinks/OrderLinks';
import OrderStateLoader from '../OrderIcons/OrderStateLoader/OrderStateLoader';
import { I18n } from 'react-i18next';
import styles from '../OrderState.scss';

const OrderPreReleased = props => (
  <I18n ns="translations">
    {t => (
      <div className={styles.container}>
        <OrderStateLoader />
        <h2 className={styles.title}>{t('Order PreReleased')}</h2>
        <h3 className={styles.subtitle}>{t('')}</h3>

        <OrderLinks {...props} />
      </div>
    )}
  </I18n>
);

export default OrderPreReleased;