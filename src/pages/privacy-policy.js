import React from 'react';
import {graphql , useStaticQuery } from 'gatsby';
import Aux from '../hoc/Auxiliary';
import style from '../styles/pages.module.scss';
import Header from '../components/header';
import Footer from '../components/Footer/Footer';


const privacyPolicy = (props) =>{


	return(
		<Aux>
			<div className={style.flexWrapper}>	
				<Header currLocation={props.location}/>
					<main className={`${style.wrapperMain} ${style.notifPages}`}>
						<div className='container'>
							

								<p>Carl Moore website is committed to safeguarding and preserving the privacy of our visitors.
								This Policy explains what happens to any personal data that you provide to us, or that we collect from you whilst you visit our site and how we use cookies on this website.
								This Policy from time to time so please do review this Policy regularly.</p>

								<h1>Information That We collect</h1>

								<p>In running and maintaining our website Carl Moore website may collect and process the following data about you:
								Information about your use of our site including details of your visits such as pages viewed and the resources that you access. Such information includes traffic data, location data and other communication data.
								Information provided voluntarily by you. For example, when you register for information or make a purchase.
								Information that you provide when you communicate with us by any means.</p>


								<h1>Use of cookies</h1>

								<p>Cookies provide information regarding the computer used by a visitor. We may use cookies where appropriate to gather information about your computer in order to assist us in improving our website.
								We may gather information about your general internet use by using the cookie. Where used, these cookies are downloaded to your computer and stored on the computer’s hard drive. 
								Such information will not identify you personally; it is statistical data which does not identify any personal details whatsoever.
								Our advertisers may also use cookies, over which we have no control. Such cookies (if used) would be downloaded once you click on advertisements on our website.
								You can adjust the settings on your computer to decline any cookies if you wish. This can be done within the “settings” section of your computer.</p>

								<h1>Use of Your Information</h1>

								<p>We use the information that we collect from you to provide our services to you. In addition to this we may use the information for one or more of the following purposes:
								To provide information to you that you request from us relating to our products or services.
								To provide information to you relating to other products that may be of interest to you. Such additional information will only be provided where you have consented to receive such information.
								To inform you of any changes to our website, services or goods and products.
								If you have previously purchased goods or services from us we may provide to you details of similar goods or services, or other goods and services, that you may be interested in.
								We never give your details to third parties to use your data to enable them to provide you with information regarding Carl Moore goods or services. </p>

								<h1>Storing Your Personal Data</h1>

								<p>In operating our website it may become necessary to transfer data that we collect from you to locations outside United States of America for processing and storing. 
								By providing your personal data to us, you agree to this transfer, storing and processing. We do our utmost to ensure that all reasonable steps are taken to make sure that your data is stored securely.
								Unfortunately the sending of information via the internet is not totally secure and on occasion such information can be intercepted. We cannot guarantee the security of data that you choose to send us electronically, sending such information is entirely at your own risk.</p>

								<h1>Disclosing Your Information</h1>

								<p>We will not disclose your personal information to any other party other than in accordance with this Privacy Policy and in the circumstances detailed below:
								In the event that we sell any or all of our business to the buyer.
								Where we are legally required by law to disclose your personal information.
								To further fraud protection and reduce the risk of fraud.</p>

								<h1>Third Party Links</h1>

								<p>On occasion we include links to third parties on this website. Where we provide a link it does not mean that we endorse or approve that site’s policy towards visitor privacy.
								 You should review their privacy policy before sending them any personal data. </p>

								<h1>Contacting Us</h1>

								<p>Please do not hesitate to contact us regarding any matter relating to this Privacy and Cookies Policy via our Contact Form.</p>
						</div>
					</main>
				<Footer/>
			</div>
		</Aux>
	);		
}

export default privacyPolicy;