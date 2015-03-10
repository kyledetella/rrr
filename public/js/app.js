'use strict';

const React = require('react');
const Header = require('./views/header');
const Siderail = require('./views/siderail');

let App = React.createClass({
  render: () => {
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
