import initStoryshots from '@storybook/addon-storyshots';
import { mount } from 'enzyme';
import { isEnzymeWrapper } from 'enzyme-to-json/utils';
import { mountToJson }  from 'enzyme-to-json';

function createSerializer() {
  return {
    test(wrapper) {
      return isEnzymeWrapper(wrapper);
    },
    print(wrapper, serializer) {
      return serializer(mountToJson(wrapper.find('#story-root').childAt(0)));
    },
  };
}

initStoryshots({
  renderer:   mount,
  snapshotSerializers: [createSerializer()],
  // snapshotSerializers: [function (wrapper) {
  //   return toJSON(wrapper.find('#story-root').get(0));
  // }],
});
