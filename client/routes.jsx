import React from 'react';
import {mount} from 'react-mounter';

import AppComponent from './components/main/main.jsx';

FlowRouter.route('/', {
  action() {
    mount(AppComponent, {});
  }
});
