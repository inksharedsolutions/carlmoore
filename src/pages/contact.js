import React, {Component , Route} from 'react';
import style from '../styles/pages.module.scss';
import Forms from '../components/Forms/Contact';
import qs from 'qs';


class FormBased extends Component {

	constructor(props){
		super(props);
		this.state ={
			data : {
				info : {
					name : {value : null},
					phone : {value : null},
					address :{value : null},
					email : { value : null},
					message :{value : null}
				},
				isValid:{
					validity : false,
					type: '',
					message : '',
				},
				validateForm : {
					name : {value : ''},
					phone : {value : ''},
					address :{value : ''},
					email : { value : ''},
					message :{value : ''}
				},
				isSubmitted : false,
			}
		}		

		this.changeHandler = this.changeHandler.bind(this);
		this.onSumbitHandler = this.onSumbitHandler.bind(this);
	}

	validateEmailRegex(val){
 		var re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
   	 	return re.test(String(val).toLowerCase());
	}


	isValidEmail(name){
		const infoDups = {...this.state.data };
		var defs = infoDups.isValid = { validity: false, type : '', message : ''}
		const constraint =  {...infoDups.isValid };

		if(!this.validateEmailRegex(constraint.email) ){

			infoDups.isValid[name] ={ value: 'invalid email format'};
			//Settting data
			this.setState({ data : infoDups});
			return true;

		}else{
			this.setState(defs);
			return false;
		}
	}


	doesFieldSupply(dups){

		const stateData = dups;
		const formErr = [];
		let formValid = false;

		let inputs = stateData.map((ef) =>{
			return [ ...ef.data.validateForm ].map((i) => {
				for ( let x in i ){
					if(!ef.data.info[x].value){
						ef.data.validateForm[x].value =  ` must have a ${x}`;
						formValid = true;
					}
					this.setState({ data : stateData[0].data});
				}
			});
		});

		return formValid;
	}

	changeHandler(e, i){

	    const nameHandler = e.name;	
	    let stateClone = { ...this.state.data };
	   	const updatedElemt = {...stateClone.info[nameHandler]};
	  	updatedElemt.value = e.value;

	  	stateClone.validateForm[nameHandler].value = !e.value ?  '' : false ;
	    stateClone.info[nameHandler] = updatedElemt;
	  
	  	//setting data
	   this.setState({data : stateClone});

	   switch(nameHandler){
	   		case 'email' :
	   			this.isValidEmail(e.name);
	   			break;
	   		default:
	   			break;
	   }
	}

	onSumbitHandler(e){

		e.preventDefault();
		
		/*
		* if everything is fine....
		* @params clone objects from current state.....
		*
		*/		

		e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () =>{
            if (xhr.readyState !== XMLHttpRequest.DONE)
            	 return;
            if (xhr.status === 200) {

            	this.setState({ data : {isSubmitted : true} })
                form.reset();
                
            } else {
            	console.log('something went wrong')
            }
        };

        xhr.send(data);
	}

	render(){
		return(
			<div className={style.sheet}>
				<Forms 
					submit={(e)=> this.onSumbitHandler(e)}
					dataInfo={this.state.data}
					changeHandler={(e) => this.changeHandler(e.target, 'info')} 
					headerText={this.props.location}/>
			</div>
		)
	}
}

export default FormBased;