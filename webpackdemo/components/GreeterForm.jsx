var React = require('react');
//var ReactDOM = require('react-dom');


var GreeterForm=React.createClass({
  onFormSubmit(e){
    e.preventDefault();
    var name=this.refs.name.value;
     var dep=this.refs.dep.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name,dep);
    }

    if (dep.length > 0) {
      this.refs.dep.value = '';
      this.props.onNewDep(dep);
    }
  },

  render:function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <input type="text" ref="dep"/>
        <button>Set Name/Department</button>
      </form>
    );
  }

});


module.exports=GreeterForm;
