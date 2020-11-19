import React from 'react';
import style from './Newsletter.module.scss';

const Newsletter = (props) =>{

	let state = (props.stateData.doesValid);

	return(
		<div id={style.bottomWrapper}>
			<div className="container">
				<section className={style.sectionNewsletter}>
					<h2 className={style.newsletterHeading}> Newsletter</h2>
						<div className={style.containerNewsletter}>
							<form onSubmit={props.submit} >
								  <div className="form-group">
								    <div className="form-text text-muted" id="pbb-letter-cont-nw">Stay up to date with latest from me</div>
								    <div className="input-group" id="pd-elementor-apex">

								    	<span className={style.spanMess}> {state.value} </span>
										<input type='text' placeholder='Email' name='email' className={ state.validity ? style.inputStyles : style.errorInput}  onChange={ (evt) => props.changed(evt) }/>
										  <div className="input-group-append">
											<input className={style.buttonNewsletter} value="Subcribe" type="submit" />
										</div>
									</div>
								  </div>
							</form>
						</div>
				</section>
			</div>
		</div>
	)
}

export default Newsletter;