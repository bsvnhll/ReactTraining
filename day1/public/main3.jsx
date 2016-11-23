var Greeter = React.createClass(
{
	render:function(){
	var name = this.props.name;
	var dept = this.props.dept;
	return(
	<div>
	<h1>Hello {name}!</h1>
	<h1>from {dept}</h1>
	</div>
	);
	}
});
ReactDOM.render(<Greeter name="Pradeep" dept="Technology"/>, document.getElementById('app'));