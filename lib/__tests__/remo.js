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
    let expectedElement = <div ref="rmod" className="RemoModal" onKeyDown={function noRefCheck() {}} style={{}} tabIndex="-1">Content</div>;
    expect(actualElement).toEqualJSX(expectedElement);
  });

  it('should not output style properties', () => {
    let renderer = createRenderer();
    renderer.render(<Remo isOpen={true} useInlineStyle={false}>Content</Remo>);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <div ref="rmod" className="RemoModal" onKeyDown={function noRefCheck() {}} style={{}} tabIndex="-1">Content</div>;
    expect(actualElement).toEqualJSX(expectedElement);
  });

  it('should output properties with style', () => {
    let renderer = createRenderer();
    renderer.render(<Remo isOpen={true} useInlineStyle={true}>Content</Remo>);
    let actualElement = renderer.getRenderOutput();

    let expectedElement = <div ref="rmod" className="RemoModal" onKeyDown={function noRefCheck() {}}
      style={{WebkitOverflowScrolling: 'touch', background: '#fff', borderRadius: '5px', height: '200px',
        left: '50%', marginLeft: '-180px', marginTop: '-150px', outline: 'none', overflow: 'auto',
        padding: '30px', position: 'fixed', textAlign: 'center', top: '50%', width: '300px', zIndex: '11'}}
      tabIndex="-1">Content</div>;

    expect(actualElement).toEqualJSX(expectedElement);
  });
});
