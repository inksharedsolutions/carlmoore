import React from 'react';
import style from './Footer.module.scss';
import Aux from '../../hoc/Auxiliary';
import Lists from '../../components/Navigations/List/List';


import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Link } from 'gatsby';
 
const Footer =(props) => {

 	const link = [ 
 		'Privacy-policy', 
 		'Terms-and-conditions'];

	return(
		<Aux>
			<footer className={style.footer}>
				<div className='container'>
					<div className='row'>

						<div className='col l6 m12 s12'>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7559506996627!2d-75.5533080846244!3d39.74513257944878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd6a9dfc32a9%3A0x3739b8658eb0c071!2s831+N+Tatnall+St+Suite+M+%23188%2C+Wilmington%2C+DE+19801%2C+USA!5e0!3m2!1sen!2sph!4v1546877261214" id={style.iframeMap} allowfullscreen=""></iframe>
							<nav id={style.soc_medias}>
								<a 
									href="https://www.facebook.com/StrattonPressInc/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faFacebook} />
								</a>
								<a
									href="https://twitter.com/strattonpress/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faTwitter} />
								</a>
								<a 
									href="https://www.instagram.com/strattonpress/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faInstagram} />
								</a>
								<a 
									href="https://www.goodreads.com/book/show/55161190-god-answered-me-in-tough-times?ac=1&from_search=true&qid=Mz7p2VhC7P&rank=2"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon 
										className='font-awesome'
										icon={faGoodreads} />
								</a>
							</nav>
						</div>

						<div className='col l6 m12 s12' id={style.info }>
							<div className={style.leftFooternav}>
								<h5>Get in Touch</h5>
								<p>Carl Moore loves to hear from readers. You can reach him via email. 
									Feel free to send questions about writing, his works, interviews and other publicity matters.</p>
							</div>

							<div className={style.socialMediacontainer}>
								<div className={style.infoFooter}>
									<p className={style.fontAwesomePargh}><span className={style.spanFonts}><i className="far fa-envelope"></i></span>publish@stratton-press.com</p>
			                        <p className={style.fontAwesomePargh}><span className={style.spanFonts}><i className="fas fa-phone"></i></span>888-323-7009</p>
			                        <p className={style.fontAwesomePargh}><span className={style.spanFonts}><i className="fas fa-map-marker-alt"></i></span> 831 N Tatnall Street, Suite M #188 </p>
			                        <p className={style.fontAwesomePargh} id={style.ffInfoCustomize}>Wilmington, DE 19801</p>

			                        <div className={style.footerNav}>
			                        	<ul>
			                        		{/* <Lists links={link} path={props.location} /> */}
											<li>
												<Link to="/privacy-policy">Privacy Policy</Link>
											</li>
											<li>
												<Link to="/terms-and-conditions">Terms and Conditions</Link>
											</li>
			                        	</ul>
			                        </div>
		                    	</div>	
							</div>
						</div>

						 <MessengerCustomerChat pageId="330094504273633" />,

                    	<div className={style.socialMediaContainer}>
               
                    	</div>
					</div>
				</div>
			</footer>
		</Aux>
	)
}	

export default Footer;	