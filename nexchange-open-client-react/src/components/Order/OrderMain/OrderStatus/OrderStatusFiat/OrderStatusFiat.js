import React from 'react';
import { I18n } from 'react-i18next';
import cx from 'classnames';
import Deposit from '../../images/deposit.svg';
import Confirmations from '../../images/confirmations.svg';
import Done from '../../images/done.svg';
import STATUS_CODES from 'StatusCodes';
import styles from '../OrderStatus.scss';

const OrderStatusFiat = props => {
  return (
    <I18n ns="translations">
      {t => (
        <div>
          <div
            className={
              [0, 8].indexOf(props.status) > -1
                ? styles.step
                : props.status > 11
                  ? cx(styles.step, styles.done)
                  : cx(styles.step, styles.active)
            }
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title={t('Order Status')}
          >
            <Deposit />
            <h4>{t('Awaiting Deposit')}</h4>
          </div>

          <div
            className={
              STATUS_CODES[props.status] === 'PAID_UNCONFIRMED'
                ? cx(styles.step, styles.active)
                : props.status >= 13
                  ? cx(styles.step, styles.done)
                  : styles.step
            }
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title={t('Confirmations')}
          >
            <Confirmations />
            <h4>{t('Awaiting Confirmations')}</h4>
          </div>

          <div
            className={
              props.status === 13 || props.status === 14
                ? cx(styles.step, styles.active)
                : props.status >= 15
                  ? props.status === 15
                    ? cx(styles.step, styles.active)
                    : cx(styles.step, styles.done)
                  : styles.step
            }
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title={t('All Done')}
          >
            <Done />
            <h4>{t('All Done')}</h4>
          </div>
        </div>
      )}
    </I18n>
  );
};

export default OrderStatusFiat;