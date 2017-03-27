/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SignedOutNav from '../components/navbar/SignedOutNav';

describe('SignedOutNav', function () {
    it('renders the SignedOutNav component', () => {
        const rendered = shallow(<SignedOutNav button={<button>button node</button>} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
