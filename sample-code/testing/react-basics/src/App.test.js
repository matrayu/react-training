import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
*/


describe('App', () => {
  const wrapper = shallow(<App />);
  it(`Should have the 'th' "Items"`, () => {
    expect(wrapper.contains(<th>Items</th>)).toBe(true);
  });
  it(`Should have a 'button' element`, () => {
    expect(wrapper.containsMatchingElement(<button>Add item</button>)).toBe(true);
  });
  it(`Should have an 'input' element`, () => {
    expect(wrapper.containsMatchingElement(<input/>)).toBe(true);
  });
  it(`'button' should be disabled`,()=>{
    const button = wrapper.find('button').first();
    expect(button.props().disabled).toBe(true);
  });
});