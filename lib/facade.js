'use strict';

var path = require('path');
var React = require('react');
var ReactDOM = require('react-dom/server');

module.exports = {
  render: function (componentPath, props, options) {
    options = options || {};
    var componentPath = path.resolve(process.cwd(), componentPath);
    var Component = require(componentPath);

    if (props) {
      if (options.isBase64) {
        props = new Buffer(props, 'base64').toString();
      }
      props = JSON.parse(props);
    }

    if (Component.default) {
      Component = Component.default;
    }

    if (options.property) {
      Component = Component[options.property];
    }

    return ReactDOM.renderToString(React.createElement(Component, props));
  }
};
