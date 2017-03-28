/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TalentForm from '../TalentForm';

describe('TalentForm', function () {
    it('renders the TalentForm form/component', () => {
        const rendered = shallow(<TalentForm signUp={() => {}} signedIn={true}/>);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
