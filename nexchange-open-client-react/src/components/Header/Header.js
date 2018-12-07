import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { I18n } from 'react-i18next';

import FAQ from './FAQ/FAQ';
import Support from './Support/Support';
import LanguagePicker from './LanguagePicker/LanguagePicker';

import styles from './Header.scss';

class Header extends Component {
  state = {
    showFaqModal: false,
    showSupportModal: false,
  };

  componentDidMount() {
    /* istanbul ignore next */
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    /* istanbul ignore next */
    if (window.location.hash && isChrome) {
      /* istanbul ignore next */
      setTimeout(function() {
        const hash = window.location.hash;
        window.location.hash = '';
        window.location.hash = hash;
      }, 2000);
    }
  }

  closeFaqModal = () => this.setState({ showFaqModal: false });
  closeSupportModal = () => this.setState({ showSupportModal: false });

  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <div className={`${styles.header} ${window.location.pathname === '/' ? styles.home : ''}`} data-test="header">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>

                <Link to="/">
                  <div className={styles['logo-container']}>
                    {window.location.pathname === '/' ? (
                      <img src="/img/logo.png" alt="Logo" data-test="logo" />
                    ) : (
                      <img src="/img/logo.png" alt="Logo" data-test="logo" />
                    )}
                  </div>
                </Link>
              </div>

              <div className="collapse navbar-collapse" id="navigation-index">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a className={styles.link} href="/#about">
                     <span className="text-gold">{t('About')}</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className={styles.link}
                      href="javascript:void(0)"
                      onClick={() => {
                        window.ga('send', 'event', 'FAQ', 'open');
                        this.setState({ showFaqModal: true });
                      }}
                      data-test="faq-btn"
                    >
                     <span className="text-green">{t('FAQ')}</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className={`${styles.link} hidden-sm`}
                      href="https://helpthehomelessworldwide.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => ga('send', 'event', 'General', 'hthworld click')}
                      data-test="partner-link"
                    >
                       <span className="text-gold">{t('HTH Worldwide')}</span>
                    </a>
                  </li> 
  
                  <li>
                    <a
                      className={styles.link}
                      href="javascript:void(0)"
                      onClick={() => this.setState({ showSupportModal: true })}
                      data-test="support-btn"
                    >
                      <span className="text-green">{t('Support')}</span>
                    </a>
                  </li>

                   <LanguagePicker />
 
              </ul>
              </div>

              <FAQ show={this.state.showFaqModal} onClose={this.closeFaqModal} />
              <Support show={this.state.showSupportModal} onClose={this.closeSupportModal} />
            </div>
          </div>
        )}
      </I18n>
    );
  }
}

export default Header;