import React from 'react';
import App from '../../src/App.js';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';
import { mount } from 'enzyme';

describe('app', () => {
  const wrapper = mount(<App />);

  test('it should render components when it mounts', () => {

    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('CardCatalog').length).toEqual(1);
    expect(wrapper.find('DistrictCard').length).toEqual(181);
  });

  test('should have a default state', () => {

    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state().schoolDistricts).toHaveLength(181);
    expect(wrapper.state().districtsToCompare).toBeDefined();
    expect(wrapper.state().districtsToCompare).toEqual([]);
  });

  test('should reset state.schoolDistricts when searching', () => {

    expect(wrapper.state().schoolDistricts.length).toEqual(181);

    wrapper.instance().searchForDistricts('ad');
    expect(wrapper.state().schoolDistricts.length).toEqual(8);

    wrapper.instance().searchForDistricts('mapl');
    expect(wrapper.state().schoolDistricts.length).toEqual(1);

    wrapper.instance().searchForDistricts('daf');
    expect(wrapper.state().schoolDistricts.length).toEqual(0);

  });










});




