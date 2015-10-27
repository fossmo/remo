import React, { PropTypes } from 'react'

class Remo extends React.Component {
  componentDidMount() {
    this.node = document.createElement('div');
    this.node.className = 'RemoOverlay';
    document.body.appendChild(this.node);
    this.toggleModal(this.props.isOpen);
    this.node.addEventListener("click", this.hideModal.bind(this), false);
  }

  componentWillUnmount(){
    this.node.removeEventListener('click', this.hideModal.bind(this), false);
    document.body.removeChild(this.node);
  }

  componentWillReceiveProps(newProps){
    this.toggleModal(newProps.isOpen);
  }

  hideModal() {
    this.toggleModal(false);
  }

  toggleModal(isOpen){
    let displayStyle = 'none';
    if (isOpen) { displayStyle = 'inline'; }
    if(parseFloat(React.version) >= 0.14){
      this.refs.rmod.style.display = displayStyle;
    } else{
      this.refs.rmod.getDOMNode().style.display = displayStyle;
    }
    this.node.style.display = displayStyle;
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
