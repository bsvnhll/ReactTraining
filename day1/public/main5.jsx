var Greeter = React.createClass(
{
getDefaultProps:function(){
	return{
	name:'React',
	dept:'IT'
	}
},
onBtnClick:function (e){
	e.preventDefault();
	var usr = this.refs.user.value;
	alert(usr);
},

	render:function(){
	var name = this.props.name;
	var message = this.props.message;
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