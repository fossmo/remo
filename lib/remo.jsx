import React, { PropTypes } from 'react'

class Remo extends React.Component {
  componentDidMount() {
    this.node = document.createElement('div');
    this.node.className = 'RemoOverlay';
    document.body.appendChild(this.node);
    this.node.addEventListener("click", this.hideModal.bind(this), false);
    if (this.props.isOpen) {
      this.refs.rmod.getDOMNode().style.display = 'inline';
      this.node.style.display = 'inline';
    } else {
      this.refs.rmod.getDOMNode().style.display = 'none';
      this.node.style.display = 'none';
    }
  }

  componentDidUnMount(){
    this.node.removeEventListener('click', this.hideModal, false);
  }

  componentWillReceiveProps(newProps){
    let node = document.getElementsByClassName('RemoOverlay')[0];
    if(newProps.isOpen){
      this.refs.rmod.getDOMNode().style.display = 'inline';
      node.style.display = 'inline';
    } else {
      this.refs.rmod.getDOMNode().style.display = 'none';
      node.style.display = 'none';
    }
  }

  hideModal() {
    this.node.style.display = 'none';
    this.refs.rmod.getDOMNode().style.display = 'none';
  }

  render () {
    return <div className="RemoModal" ref="rmod">
      {this.props.children}
    </div>;
  }
};

  Remo.propTypes = {
    isOpen: React.PropTypes.bool.isRequired
  };

export default Remo

