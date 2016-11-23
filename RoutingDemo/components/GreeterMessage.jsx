var React = require('react');
//var ReactDOM = require('react-dom');


var GreeterMessage=React.createClass({
  render:function(){
    var name=this.props.name;
    var dep=this.props.dep;
    var message=this.props.message;
    return(
      <div>
        <h1>Hello {name} from {dep}!</h1>
        <p>{message}</p>
      </div>
    )
  }
});

module.exports=GreeterMessage;
