import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledHelp from './styles';

const Help = () => {
  const { t } = useTranslation();

  return (
    <StyledHelp>
      <h1>{t('How to Log In')}?</h1>
      <p>{t('To log into the app two users were made')}:</p>

      <table>
        <thead>
          <th>{t('USER')}</th>
          <th>{t('PASSWORD')}</th>
        </thead>
        <tbody>
          <tr>
            <td>tester@tester.com</td>
            <td>abc</td>
          </tr>
          <tr>
            <td>bsc@gmail.com</td>
            <td>cbc</td>
          </tr>
        </tbody>
      </table>

      <h1>{t('How to manipulate notes')}?</h1>
      <h2>{t('Deletion')}:</h2>
      <p>{t('Notes are draggable. To delete a note simply drag in over trash icon.')}</p>
      <h2>{t('Creation')}:</h2>
      <p>{t('Click on the green button and fill the text.')}</p>
      <h2>{t('Update')}:</h2>
      <p>{t('Double click on the chosen note and edit the text.')}</p>

      <h4>{t('Beware')}</h4>
      <p>
        {t('Some plugins doing grammar corrections (like Grammarly) may cause app disfunction.')}
        <br />
        {t('Please be sure to not use them, otherwise strange behavior may occur.')}
      </p>

      <p className="copyright">Copyright 2019 - by Matej Leško.</p>
    </StyledHelp>
  );
};

export default Help;
