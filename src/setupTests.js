const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

enzyme.configure({ adapter: new Adapter() });

expect.extend({ toMatchImageSnapshot });
