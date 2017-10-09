import React from 'react';
import GraphCard from '../../src/components/GraphCard.js';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';
import { mount, shallow } from 'enzyme';

describe('GraphCard', () => {
  let mockFunc;
  let wrapper; 
  let shallowWrapper;
  let districtData = {
    '2004': 0.24,
    '2005': 0.278,
    '2006': 0.337,
    '2007': 0.395,
    '2008': 0.536,
    '2009': 0.598,
    '2010': 0.64,
    '2011': 0.672,
    '2012': 0.695,
    '2013': 0.703,
    '2014': 0.741
  };
  let district = {
    data: districtData,
    location: 'COLORADO',
    handleSelected: mockFunc,
    id: 101,
    key: 101,
    isSelected: false
  };

  beforeAll(() => {
    mockFunc = jest.fn();
    // shallowWrapper = shallow(<GraphCard districtData={district.data}
    //   districtLocation={district.location}
    //   handleSelected={mockFunc}
    //   id={district.id}
    //   key={district.id}
    //   isSelected={district.isSelected}
    // />);
    
    wrapper = mount(<GraphCard districtData={district.data}
                           districtLocation={district.location}
                             handleSelected={mockFunc}
                                         id={district.id}
                                        key={district.id}
                                 isSelected={district.isSelected}
                    />);
  });

  test('should exist', () => {
    // console.log(shallowWrapper.debug())
    expect(wrapper).toBeDefined();
  });

  test('should set the state by calling handleSelected', () => {
    
    wrapper.simulate('click')
   
    expect(wrapper.instance().props.handleSelected).toHaveBeenCalled()
  });





});