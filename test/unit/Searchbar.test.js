import React from 'react';
import Searchbar from '../../src/components/Searchbar';
import Adapter from 'enzyme-adapter-react-15';
import {config} from '../setup.js';
import { shallow, mount } from 'enzyme';

describe('Searchbar', () => {
  let mockFunc;
  let wrapper; 
  // let shallowWrapper;


  beforeAll(() => {
    mockFunc = jest.fn();
    wrapper = mount(<Searchbar searchForDistricts={mockFunc} />);
    // shallowWrapper = shallow(<Searchbar searchForDistricts={mockFunc} />);
  });
    
  test('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  test('should set state.value by calling handleChange and also call set App.state by calling searchForDistricts', () => {
    expect(wrapper.state().value).toEqual('');
    wrapper.instance().handleChange('colo');
    expect(wrapper.state().value).toEqual('colo');

    expect(wrapper.instance().props.searchForDistricts).toHaveBeenCalled();
  });



});