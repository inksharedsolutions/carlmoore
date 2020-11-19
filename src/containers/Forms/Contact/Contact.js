import React, {Component} from 'react';
import Forms from '../../../pages/contact';

class FormBased extends Component{

	state ={
		name : '',
		phone : '',
		address : '',
	}

	validationHandler(){

	}

	changeHandler(e){
		console.log(e.value);
	}


	onSumbitHandler(e){

	}


	render(){
		return(
			<div>
				<Forms
					changeHandler={{(e)=> this.changeHandler(e.target)}}>
			</div>
		)
	}
}

export default FormBased;