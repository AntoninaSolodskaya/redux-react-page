import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Router from './pages/Router';

const store = configureStore();

render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router />
    </Provider>
  </I18nextProvider>,
  document.getElementById('main'),
);

module.hot.accept();
