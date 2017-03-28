/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RecruiterForm from '../RecruiterForm';

describe('RecruiterForm', function () {
    it('renders the RecruiterForm form/component', () => {
        const rendered = shallow(<RecruiterForm signedIn={false} signUp={() => {}} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
