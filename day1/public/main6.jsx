var Greeter = React.createClass(
{
getDefaultProps:function(){
	return{
	name:'React',
	dept:'IT'
	}
},
getInitialState:function(){
	return {
	name:this.props.name,
	message:this.props.message
	};
},
onBtnClick:function (e){
	e.preventDefault();
	var usr = this.refs.user.value;
	this.setState({
	name:usr
	}
	)
},

	render:function(){
	var name = this.state.name;
	var message = this.state.message;
	return(
	<div>
	<h1>Hello {name}!</h1>
	<p>{message + '!!'}</p>
	<form onSubmit={this.onBtnClick}>
	<input type="text" ref="user"/>
	<button> set name </button>
	</form>
	</div>
	);
	}
});
ReactDOM.render(<Greeter name="Pradeep" message="Technology"/>, document.getElementById('app'));