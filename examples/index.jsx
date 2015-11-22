require('./example.less');

import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router'
import Remo from '../lib/remo.jsx';

class ExampleApp extends React.Component{
  constructor(){
    super();
    this.state = {isOpen:false};
  }

  render () {
    return <div>
      <div className='btn centerbtn pulse' onClick={this.handleOpenModalClick.bind(this)}>Open modal</div>
      <Remo isOpen={this.state.isOpen} useInlineStyle={false} >
        <div className="modalHeader">RemoJS - a simple modal dialog</div>
        <div className="closebtn" onClick={this.handleCloseModalClick.bind(this)}></div>
        <div className="modalContent">
          <h4>Made for ReactJS</h4>
          <p>
            ReactJS is a great Javascript library. Components are the future of web development,
            and ReactJS makes creating components a breeze. You can create self-contained,
            customizable elements that you can import and use in your projects.
            RemoJS tries to be a component that fits into this description.
          </p>

          <h4>Functionality</h4>
          <p>
            The dialog can be closed by pressing the ESC or TAB key.
            It can also be closed by clicking on the overlay behind the dialog.
            If you want a close button inside the dialog, look at the code of this
            example to learn how to do that.
          </p>

          <h4>Background image</h4>
          <p>
            The background image used in this example was found at https://unsplash.com/.
            The image is taken by Patrick Hendry.
          </p>
          <a href="#page2" className="link">Link to another page for testing purpose.</a>
        </div>
      </Remo>
    </div>;
  }

  handleOpenModalClick(){
    this.setState({isOpen:true});
  }

  handleCloseModalClick(){
    this.setState({isOpen:false});
  }
}

class LinkPage extends React.Component{
  constructor(){
    super();
  }

  render () {
    return <div>
      <div>The page linked to.</div>
    </div>;
  }
}

render((
  <Router >
    <Route path="/" component={ExampleApp} > </Route>
    <Route path="page2" component={LinkPage} > </Route>
  </Router>
), document.getElementById('app'))
