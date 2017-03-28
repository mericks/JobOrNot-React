/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SingleInput from '../SingleInput';

describe('SingleInput', function () {
    it('renders the SingleInput field/component', () => {
        const rendered = shallow(<SingleInput title={'string'} name={'string'} inputType={'text'} content={'string'} controlFunc={() => {}} placeholder={'string'}/>);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
