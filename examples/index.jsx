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
      <div className='btn' onClick={this.handleOpenModalClick.bind(this)}>Open modal</div>
      <Remo isOpen={this.state.isOpen}>
        <div>Content of modal. More content. Even more. MORE! More!!</div>
        <a href="#page2">Link</a>
      </Remo>
    </div>;
  }

  handleOpenModalClick(){
    this.setState({isOpen:true});
  }
}

class LinkPage extends React.Component{
  constructor(){
    super();
  }

  render () {
    return <div>
      <div>Dette er side 2</div>
    </div>;
  }
}

render((
  <Router >
    <Route path="/" component={ExampleApp} > </Route>
    <Route path="page2" component={LinkPage} > </Route>
  </Router>
), document.getElementById('app'))
