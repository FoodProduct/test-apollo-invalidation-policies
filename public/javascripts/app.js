(function (React, ReactDOM) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  var App = function App(_props) {
    return /*#__PURE__*/React__default['default'].createElement("div", null, "Test apollo invalidation app");
  };

  ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(App, null), document.querySelector('#app'));

}(React, ReactDOM));
