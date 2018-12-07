import React from 'react';
import { I18n, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Footer.scss';

const Footer = () => (
  <I18n ns="translations">
    {t => (
      <footer className={styles.container}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-6">
              <Trans i18nKey="footer.3">
                <p className={styles.address}>
                  <strong><p><span className="text-gold"
>{t('All Right Reserved HTHWorld')}</span></p></strong>
<strong><p><span className="text-green">{t('Powered By NEXCHANGE')}</span></p></strong>
               </p>
               </Trans>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-6">
              <ul className={styles.links}>
                <li>
                  <Link to="/terms-and-conditions">{t('Terms & Conditions')}</Link>                       
                </li>
                
                      
   <li>
                  <Link to="/privacy"><p><span className="text-green">{t('Privacy Policy')}</span></p></Link>
                 </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )}
  </I18n>
);

export default Footer;