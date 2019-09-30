import React from 'react';
import {shallow,mount,render} from "enzyme";
import CartDropdown from './components/cart-dropdown/cart-dropdown.component';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});


it('expect render dropdown component',()=>{
    expect(shallow(<CartDropdown/>).length).toEqual(1);
});