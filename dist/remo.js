'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Remo = (function (_React$Component) {
  _inherits(Remo, _React$Component);

  function Remo() {
    _classCallCheck(this, Remo);

    _get(Object.getPrototypeOf(Remo.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Remo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = document.createElement('div');
      this.node.className = 'RemoOverlay';
      document.body.appendChild(this.node);
      this.toggleModal(this.props.isOpen);
      this.node.addEventListener("click", this.hideModal.bind(this), false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.node.removeEventListener('click', this.hideModal.bind(this), false);
      document.body.removeChild(this.node);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.toggleModal(newProps.isOpen);
    }
  }, {
    key: 'hideModal',
    value: function hideModal() {
      this.toggleModal(false);
    }
  }, {
    key: 'toggleModal',
    value: function toggleModal(isOpen) {
      var displayStyle = 'none';
      if (isOpen) {
        displayStyle = 'inline';
      }
      if (parseFloat(_react2['default'].version) >= 0.14) {
        this.refs.rmod.style.display = displayStyle;
      } else {
        this.refs.rmod.getDOMNode().style.display = displayStyle;
      }
      this.node.style.display = displayStyle;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'RemoModal', ref: 'rmod' },
        this.props.children
      );
    }
  }]);

  return Remo;
})(_react2['default'].Component);

;

Remo.propTypes = {
  isOpen: _react2['default'].PropTypes.bool.isRequired
};

exports['default'] = Remo;
module.exports = exports['default'];
