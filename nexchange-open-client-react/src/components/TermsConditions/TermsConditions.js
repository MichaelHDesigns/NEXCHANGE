import React from 'react';
import { I18n } from 'react-i18next';

const TermsConditions = () => {
  return (
    <I18n ns="translations">
      {t => (
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
             <h2><span className="text-gold">{t('Terms & Conditions')}</span></h2>
            HTHWorld is an Exchange which allows you to exchange 
crypto and fiat currencies with the best exchange rate. 
Terms We, Exchange, Exchange operator refer to HTHWorld.
              By using HTHWorld, you agree to these conditions.
 Please read them carefully. If you do not agree with the terms and conditions
 in this Agreement you may not use the Exchange.
              We reserve the right to make changes to our site,
 policies and terms of use at any time. The content of the pages of the website
 is for your general information and use only. It is subject to change without notice.
              HTHWorld is not responsible for any loss caused by any
 reason while working with the Exchange. Any kind of losses caused by the
 third party activities has to be handled by the user.
              HTHWorld takes an exchange fee for using the service.
 The fee is 0.5% of the transaction volume for cryptocurrency to cryptocurrency
 transitions on cryptocurrency majors (BTC, ETH, LTC and similar), 1% on minors
 (the rest) and 2% on fiat pairs (such as BTCEUR). In addition to those 2%,
 a payment processor fee of 5%-7% might be applicable depending on the currency
 and the payment method chosen by you.
              All fees are transparent and already included in the
 calculated order price. The fee can be a subject to reasonable fluctuations
 due to the mathematical rounding.
              Transactions cannot be canceled by HTHWorld.
 Therefore, check your payment details before making transaction.
 HTHWorld is not responsible for your coins once they have been sent to the wallet.
              HTHWorld does not guarantee the uptime of the exchange.
 Maintenance and downtime may be required at times.
             By uploading or sharing any kind of content, 
you automatically grant us a worldwide license to use your content
. It becomes part of the public domain as long as it remains on our website.
 It can be used for marketing or any other purposes by HTHWorld.
              You are prohibited from using or accessing HTHWorld from the following jurisdictions

              <ol>
                <li><h2><span className="text-gold">{t('New York State')}</span></h2></li>
                <li><h2><span className="text-gold">{t('Washington State')}</span></h2></li>
                <li><h2><span className="text-gold">{t('North Korea')}</span></h2></li>
              </ol>

              Transactions from users in these jurisdictions are prohibited,
 and HTHWorld may seize any funds from users in these jurisdictions.
 By accessing this site or any services therein, you represent and warrant
 that you are not physically located in these prohibited jurisdictions.

              <h3><span className="text-gold">{t('Refund Policy')}</span></h3>

             We will revert any trade by the request of the customer
 according to the current market rate, provided the opposite trade direction
 is supported at the time the refund is requested.
              Otherwise, no refunds are possible and it is the sole 
responsibility of the user to make sure that he controls the wallet the address
 of which he uses to receive funds from HTHWorld.

              <br />
            </div>
          </div>
        </div>
      )}
    </I18n>
  );
};

export default TermsConditions;