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
                  All rights reserved, HTHWorld 2018,<br />Help The Homeless Coin Company{' '}                              </p>
              </Trans>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-6">
              <ul className={styles.links}>
                <li>
                                         
                </li>
                <li>
                  <Link to="/privacy">{t('Privacy Policy')}</Link>
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