import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

//testing Home page using snapshot test
it ("testing home component" , ()=> {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
})
