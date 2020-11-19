import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import style from './Newsletter.module.css';
import NewsletterForm from '../../../components/Forms/Newsletter'
// import {FormBased} from '../../../pages/contact'; 

class Newsletter extends Component{

	constructor(props){
		super(props);

		this.state ={
			doesValid : {
				validity : true,
				value : '',
			},

		}

		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	validateEmailRegex(val){
 		var re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
   	 	return re.test(String(val).toLowerCase());
	}

	submitHandler(e){
		e.preventDefault();
		const emailVal = e.target.email.value;
		let dupsCheck = [...this.state.doesValid];


		if(emailVal.length == 0){
			this.setState({doesValid : {validity : false,  value : 'Must Have an Email'}});
		}else{	
			if(this.state.doesValid.validity)
			   fetch(`${process.env.GATSBY_ABS_PATH}newsletterData`, {
				  method: "post",
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json'
				  },

				 //serialize data......
				  body: JSON.stringify({
				  	 user : process.env.GATSBY_SECRET_U,
				  	 pass : process.env.GATSBY_SECRET_P,
				     email: emailVal,
				  })
				})
				.then( (response) => { 	
				    if(response.status === 200){

				    }
				}).catch((err) =>{
					if(err){
					  console.log('Something Went Wrong');
					}
				})
		}
	}

	changeHandler(e){

		const val = (e.target.value);	
		const emailValidate = this.validateEmailRegex(val); 
		const dataSet= emailValidate ? {validity : true,  value : ''} :{validity : false,  value : 'Invalid Email Format'};
		this.setState({doesValid : dataSet });
	
	}

	render(){
		return(
			<Aux>
				<div className={style.newsletter}>
					<NewsletterForm 
						stateData ={ this.state }
						changed={(e)=> this.changeHandler(e)}
						submit={(e)=> this.submitHandler(e)}/>
				</div>
			</Aux>	
		)
	}
}

export default Newsletter;