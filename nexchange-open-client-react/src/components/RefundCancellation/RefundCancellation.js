import React from 'react';
import { I18n } from 'react-i18next';

const RefundCancellation = props => {
  return (
    <I18n ns="translations">
      {t => (
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>{t('Refund')}</h2>
                {t('Email')} <a href="mailto:support@hthcoin.world">support@hthcoin.world</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </I18n>
  );
};

export default RefundCancellation;