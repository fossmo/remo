import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer, renderIntoDocument} from 'react-addons-test-utils';
expect.extend(expectJSX);

import Remo from '../remo.jsx';

describe('Remojs', () => {
  it('shows div with class RemoModal', () => {
    let renderer = createRenderer();
    renderer.render(<Remo isOpen={true}>Content</Remo>);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <div className="RemoModal" ref="rmod">Content</div>;
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
