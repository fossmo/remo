import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer, renderIntoDocument} from 'react-addons-test-utils';
expect.extend(expectJSX);

import Remo from '../remo.jsx';

describe('Remojs', () => {
  it('validates that Remo outputs correct properties', () => {
    let renderer = createRenderer();
    renderer.render(<Remo isOpen={true}>Content</Remo>);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <div ref="rmod" className="RemoModal" onKeyDown={function noRefCheck() {}} tabIndex="-1">Content</div>;
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
