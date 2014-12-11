'use strict';

var React = require('react');
var Header = require('./views/header');
var Siderail = require('./views/siderail');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="stage">
          <Siderail />
          <div className="outlet">Outlet</div>
        </div>
      </div>
    );
  }
});

React.render(<App />, document.body);
