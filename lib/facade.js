'use strict';

var path = require('path');
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = {
  render: function (componentPath, props) {
    var componentPath = path.resolve(process.cwd(), componentPath);
    var Component = require(componentPath);
    props = props && JSON.parse(props);

    var ComponentFactory = React.createFactory(Component);
    return ReactDOM.renderToString(ComponentFactory(props));
  }
};
