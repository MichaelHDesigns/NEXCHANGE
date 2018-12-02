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
              <h2 className="title">{t('About')}</h2>
            </div>

            <div className="col-xs-12 col-sm-6">
              <p><span className="text-green">{t('About')}</span></p>
              HTHWorld brings it's next step to the world

              <p><span className="text-green">{t('Exchange Team')}</span></p>
              Devilking6105

              <p><span className="text-green">{t('General Inquiries')}</span></p>
              business@hthcoin.world
              <p><span className="text-green">{t('Coin Listing')}</span></p>
              support@hthcoin.world
            </div>

            <div className="col-xs-12 col-sm-6">
              
             <p><span className="text-green">{t('Thank You for Open Source')}</span></p>
              <Trans i18nKey="about.7">
                <p>
                  To support YOA LTD's mission of making crypto accessible to everyone, HTHWorld is completely Open Source
                </p>
              </Trans>
            </div>
          </div>
        </div>
      </div>
    )}
  </I18n>
);

export default About;