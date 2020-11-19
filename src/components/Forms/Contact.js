import React, {useState} from 'react';
import style from '../../styles/pages.module.scss';
import Header from '../header';
import Footer from '../Footer/Footer';
import Inputs from "../Inputs/inputs"

const Contact = (props) =>{

	const formState = props.dataInfo.validateForm;
	console.log(props.dataInfo.isSubmitted);


	return(
		<div className={style.flexWrapper}>
			<Header currLocation={props.headerText}/>
				<main className={style.flexMainContainer}>
					<div className='container'>
						<div className='row'>


							<p className={style.contactMessage}>Hello! Are you having a good day? Anyway, if you have any concerns or you just want to share something, please feel free to drop me a line. I would love to hear anything from you.</p>

								{
									props.dataInfo.isSubmitted && (
										<span className={style.mess_success}>Message Sent</span>
									 )
								}

								<form 
									onSubmit={props.submit} 
									action="https://formspree.io/xvopdpny"
									method="POST">

									<div className='col l6 m12 s12'>
										<Inputs 
											name="fullname" 
											type="text" />

										<Inputs
											name="phone" 
											type="text" />
									</div>

									<div className='col l6 m12 s12'>
										<Inputs 	
											name="email"
											type="email" />

										<Inputs 
											name="address" 
											type="text" />

									</div>

									<div className='col l12 m12 s12' id={style.textAreaContainer}>
										<label>
								          Message
								          <textarea type="text" name='message' value={props.dataInfo.message}
									           onChange={props.changeHandler}
									           className={style.textArea}  placeholder='Message'/>
								        </label>
									</div>


									{
										!props.dataInfo.isSubmitted && (
											<div className={style.buttonContainer}>
												<input className={style.abtiaryButton}  value="Submit" type="submit" />
											</div>
										 )
									}

							</form>
						</div>
					</div>
				</main>
			<Footer />
		</div>
	);
}

export default Contact;