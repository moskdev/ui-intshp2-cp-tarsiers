import React from 'react';
import { connect } from 'react-redux';

import { RouterLink, ExternalLink } from '../Links';
import logo from '../../../assets/logo.png';
import appConfig from '../../../config/appConfig';
import './Footer.scss';

const Footer = props => {
  const { headerFooterVisibility } = props;
  const visible = headerFooterVisibility.value;

  const renderLinks = list =>
    list.map(link => {
      const { id, value, href, isOrigin } = link;
      const linkType = isOrigin ? (
        <RouterLink href={href} value={value} />
      ) : (
        <ExternalLink href={href} value={value} />
      );

      return <li key={id}>{linkType}</li>;
    });

  const { links, payments } = appConfig.footer;
  const footerLinks = <ul>{renderLinks(links)}</ul>;
  const footerPayments = <ul>{renderLinks(payments)}</ul>;

  return visible ? (
    <footer className="footer">
      <div className="container">
        <nav className="footer__block row">
          <div className="footer__copyright col-3">
            <img src={logo} alt="" />
            <span>Shopy &copy; 2018</span>
          </div>
          <div className="footer__links col-6">{footerLinks}</div>
          <div className="footer__payments col-2">
            <div className="payments-wrap">
              <p>Payment Methods</p>
              {footerPayments}
            </div>
          </div>
        </nav>
      </div>
    </footer>
  ) : null;
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Footer);
