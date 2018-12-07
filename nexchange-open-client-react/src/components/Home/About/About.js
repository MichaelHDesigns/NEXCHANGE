import React from 'react';
import styles from './About.scss';
import { I18n, Trans } from 'react-i18next';


const About = () => (
  <I18n ns="translations">
    {t => (
      <div id="about" className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
            </div>

            <div className="col-xs-12 col-sm-6">
              <p><span className="text-gold">{t('About')}</span></p>
             HTHWorld is dedicated to low fees that are directly
 donated to charities & development of HTHWorld so the user will
 never be disappointed with fees & will always know where the fees are going.

             <p><span className="text-gold">{t('General Inquiries')}</span></p>
              <a href="mailto:business@hthcoin.world">business@hthcoin.world</a>
              <p><span className="text-gold">{t('Coin Listing')}</span></p>
              <a> support@hthcoin.world</a>
            </div>

            <div className="col-xs-12 col-sm-6">
              
             <p><span className="text-gold">{t('Thank You for Open Source')}</span></p>
              <Trans i18nKey="about.7">
                <p>
                  We are Powered by NEXCHANGE, whose mission of making crypto
 accessible to everyone, HTHWorld is completely Open Source
                </p>
<p><span className="text-gold">{t('Donate to HTH Worldwide')}</span></p>
              <li>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="6L3Q7YSS82MNS" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
</li>
              </Trans>
            </div>
          </div>
        </div>
      </div>
    )}
  </I18n>
);

export default About;