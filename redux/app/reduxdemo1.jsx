var redux = require('redux');

console.log('Starting redux example');
var stateDefault={
	name:'Anonymous',
	hobbies:[],
	department:[]
};
var nextHobbyId = 1;
var nextdepartmentid = 1;
var reducer= (state=stateDefault, action) =>{
	//return state;
switch(action.type){
	case 'CHANGE_NAME':
	return{
		...state,
		name:action.name
	};
	case 'ADD_HOBBY':
	return{
		...state,hobbies:[...state.hobbies,{
			id:nextHobbyId++,
			hobby:action.hobby
		}]
	}
	case 'ADD_DEPT':
	return{
		...state,hobbies:[...state.hobbies,{
			id:nextHobbyId++,
			hobby:action.hobby
		}],department:[...state.department,{
			id:nextdepartmentid++,
			dept:action.dept
		}]
	}
	default:
	return state;
}

};



var store = redux.createStore(reducer);
var unsub = store.subscribe(()=>{
var state = store.getState();
});

var currentState = store.getState();
console.log('currentstate',currentState);

store.dispatch({
	type:'CHANGE_NAME',
	name: 'PRADEEP'
});
console.log('name should be Pradeep', store.getState());
store.dispatch({
	type:'CHANGE_NAME',
	name: 'Kumar'
});
//unsub();
console.log('name should be Kumar', store.getState());
store.dispatch({
	type:'CHANGE_NAME',
	name: 'abcd'
});
console.log('name should be abcd', store.getState());

store.dispatch({
	type:'ADD_HOBBY',
	hobby:'Running'
});
console.log('name should be Running', store.getState());
store.dispatch({
	type:'ADD_DEPT',
	hobby:'IT'
});
console.log('name should be IT', store.getState());