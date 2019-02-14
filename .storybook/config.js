import { configure, addDecorator, setAddon } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import allStories  from './allStories'
import './style.css';

setAddon(allStories.addStoriesGroup);

addDecorator(withInfo({
  inline: true,
}));

addDecorator(withOptions({
  name:              'Design System',
  url:               'https://github.com/videodock',
  sortStoriesByKind: true,
  goFullScreen:      false,
  showStoriesPanel:  true,
  showAddonPanel:    false,
  showSearchBox:     false,
  addonPanelInRight: true,
}));

const requireComponents = require.context('../src/components', true, /\.stories\.jsx?$/);

const loadStories = () => {
  requireComponents.keys().forEach((filename) => requireComponents(filename));
};

configure(loadStories, module);
