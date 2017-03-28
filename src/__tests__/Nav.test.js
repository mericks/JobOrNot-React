/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Nav from '../components/navbar/Nav';

describe('Nav', function () {
    it('runs the Nav', () => {
        const rendered = shallow(<Nav signedIn={true} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
