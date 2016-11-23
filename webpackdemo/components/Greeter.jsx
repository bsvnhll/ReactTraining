var React = require('react');
var GreeterForm = require('./components/GreeterForm')
var GreeterMessage = require('./components/GreeterMessage')
//var ReactDOM = require('react-dom');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      dep : 'Testing',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        dep: this.props.dep
    };
  },
  handleNewName: function (name,dep) {
    this.setState({
      name: name,
      dep:dep
    });
    this.props.message='this will not work as props cant change';
  },



  render: function () {
    var name = this.state.name;
    var dep = this.state.dep;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} dep={dep}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

module.exports=Greeter
