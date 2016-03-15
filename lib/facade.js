'use strict';

var path = require('path');
var React = require('react');
var ReactDOM = require('react-dom/server');

module.exports = {
  render: function (componentPath, props) {
    var componentPath = path.resolve(process.cwd(), componentPath);
    var Component = require(componentPath);
    props = props && JSON.parse(props);

    if (Component.default) {
      Component = Component.default;
    }

    return ReactDOM.renderToString(React.createElement(Component, props));
  }
};
