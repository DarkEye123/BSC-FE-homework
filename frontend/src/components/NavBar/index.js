import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { useTranslation } from 'react-i18next';
import {
  Header, Logo, Lang, LangButton,
} from './styles';
import { ACTIVE_USER_QUERY } from '../../resolvers';
import { Logout } from '..';
import { PAGES } from '../../routes';

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Query query={ACTIVE_USER_QUERY}>
      {({ data }) => (
        <Header>
          <Logo>
            <Link to={PAGES.home} />
          </Logo>
          <nav>
            <ul>
              <li>
                <Link to={PAGES.help}>{t('Help')}</Link>
              </li>
              {!!data.activeUser && (
                <>
                  <li>
                    <Link to={PAGES.notes}>{t('Notes')}</Link>
                  </li>
                  <li>
                    <Logout>{t('Logout')}</Logout>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <Lang>
            <LangButton active={i18n.language === 'sk'} onClick={() => changeLanguage('sk')}>
              sk
            </LangButton>
            <LangButton active={i18n.language === 'en'} onClick={() => changeLanguage('en')}>
              en
            </LangButton>
          </Lang>
        </Header>
      )}
    </Query>
  );
};
export default NavBar;
