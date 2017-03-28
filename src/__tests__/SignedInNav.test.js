/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SignedInNav from '../components/navbar/SignedInNav';

describe('SignedInNav', function () {
    it('renders the SignedInNav component', () => {
        const rendered = shallow(<SignedInNav />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
