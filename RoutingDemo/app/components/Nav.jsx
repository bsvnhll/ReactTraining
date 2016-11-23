var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        <Link to="/contactus" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contactus</Link>
        <Link to="/locateus" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Locateus</Link>
        <Link to="/services" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Services</Link>
<a href="#/about"> goto about</a>
      </div>
    );
  }
});

module.exports = Nav;
