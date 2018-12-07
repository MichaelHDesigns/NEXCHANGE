import React from 'react';
import config from 'Config';
import OrderLinks from '../OrderLinks/OrderLinks';
import { I18n } from 'react-i18next';

const OrderFailure = props => (
  <I18n ns="translations">
    {t => (
      <div id="order-failure" className="text-center">
        <h2>{t('Order Failed')}</h2>
        <h5>
          {t('Order Failed')} <a href={`mailto:${config.SUPPORT_EMAIL}`}>{config.SUPPORT_EMAIL}.</a>
        </h5>

        <OrderLinks {...props} />
      </div>
    )}
  </I18n>
);

export default OrderFailure;