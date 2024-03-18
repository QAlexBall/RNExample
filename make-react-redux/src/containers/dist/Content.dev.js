"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _Content = _interopRequireDefault(require("../components/Content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    themeColor: state.themeColor
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(_Content["default"]);

exports["default"] = _default;