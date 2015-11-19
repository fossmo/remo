import React, { PropTypes } from 'react'

 /*
  * RemoJS is a simple to use modal dialog for ReactJS.
  *
  * To use it, import the module and add the following to your code:
  * <Remo isOpen={true}>Content of modal.</Remo>
  * Style the dialog and overlay by changing the RemoModal and
  * RemoOverlay class in your CSS file.
  */

class Remo extends React.Component {
  constructor(){
    super();

    this.defaultStyles = {
      remomodal: {
        position                : 'fixed',
        width                   : '300px',
        height                  : '200px',
        marginTop               : '-150px',
        marginLeft              : '-180px',
        top                     : '50%',
        left                    : '50%',
        background              : '#fff',
        overflow                : 'auto',
        WebkitOverflowScrolling : 'touch',
        borderRadius            : '5px',
        outline                 : 'none',
        zIndex                  : '11',
        padding                 : '30px',
        textAlign               : 'center'
      }
    };
  }

   /*
    * The overlay will be added to the body element of the page.
    * If you want to edit how the overlay looks, add RemoOverlay
    * to your CSS file. The overlay attaches to the body element.
    */
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
     this.refs.rmod.focus();
  }

  hideModal() {
    this.toggleModal(false);
  }

  handleKeyDown(event){
    if (event.keyCode == 27 /*esc*/) this.hideModal();
    if (event.keyCode == 9 /*tab*/) this.hideModal();
  }

   /*
    * By default the modal is hidden.
    *
    * @param {bool} isOpen Hides or shows the dialog.
    */
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


   /*
    * To style the modal change the RemoModal class.
    */
  render () {
    return React.DOM.div({
      className: "RemoModal",
      ref: "rmod",
      tabIndex: "-1",
      style: (this.props.useInlineStyle?this.defaultStyles.remomodal:{}),
      onKeyDown: this.handleKeyDown.bind(this)
    }, this.props.children);
  }
};

Remo.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  useInlineStyle: React.PropTypes.bool.isRequired
};

export default Remo
