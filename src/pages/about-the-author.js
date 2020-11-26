import React, { Component, Route } from 'react';
import Aux from '../hoc/Auxiliary';
import style from '../styles/pages.module.scss';
import Header from '../components/header';
import Footer from '../components/Footer/Footer';
import authorImage from '../asset/author/main_author.jpg';

const abouttheAuthor = (props) => {
	return (
		<Aux>
			<div className={style.flexWrapper}>
				<Header currLocation={props.location} />
				<main className={style.wrapperMain}>
					<div className="container">
						<div className="row" id={style.flexWrapper}>
							<div className="col l6 m12 s12">
								<div className={style.authorContainerImage}>
									<img src={authorImage} />
								</div>
							</div>

							<div className="col l6 m12 s12">
								<section className={style.contentSectionBiography}>
									<p className={style.paramsBio}>
										Carl was born and raised in Philadelphia, PA to a deceased hearing father and
										deceased deaf mother. He is second oldest of seven children (three hearing and
										four deaf). Carl and his wife Nina, were married in 1998 and have four grown
										children. Although Carl is originally from Philadelphia, PA, he has lived many
										places.
									</p>
									<p className={style.paramsBio}>
										He is a graduate of: National Technical Institute for the Deaf/Rochester
										Institute of Technology (NTID/RIT) with AAS degree in Business Technology ('74),
										Gallaudet University (GU) with BA degree in Social Work ('81), New York
										University (NYU) with MA degree in Deafness Rehabilitation ('83). He also holds
										a Certificate of Ordination and Certification in Biblical and Deaf Ministry
										Studies in May 2007 and a BA degree in Biblical and Deaf Ministry Studies in May
										2009 from Sunset International Bible Institute (SIBI) in Lubbock, TX.
									</p>
									<p className={style.paramsBio}>
										Carl's experiences include a number of minister/counselor internships at
										congregations from Florida to Oklahoma, even working eight summers with a Deaf
										Foreign Mission Team in Kenya, Africa, between 2006 and 2017.
									</p>
									<p className={style.paramsBio}>
										Carl was employed as Minister/Counselor for the Deaf/Hard of Hearing at Park
										Plaza Church of Christ (PPCC) Deaf Ministry in Tulsa, OK, since June 1, 2008.
										Then he retired on December 31, 2018, and he moved to Dallas, TX on January 26,
										2019. Then he became Co-Director of Deaf Ministry on February 4, 2019 at Cedar
										Crest Church of Christ (CCCC) in Dallas, TX. He continued to have a great desire
										to reach out to the lost deaf people, hard of hearing people, and those who
										associate with them by sharing the Gospel of Jesus Christ with them.
									</p>

									<p className={style.paramsBio}>
										{/* <span>Born: December 24, 1958 (age 60 years) Joiner Arkansas</span>

											<span>Children: Robert (June 20, 1978) </span>

											<span>Education: Arkansas Northeastern College (1998-2001)</span> */}
									</p>

									<div className={style.authorContainerName}>
										<h2 className={style.authorName}>Carl Moore</h2>
										<p className="sub-cats-ff-paragraph">
											<span className={style.spanFx}>Author</span> |{' '}
											<span className={style.spanFx}>Writer</span>
										</p>
									</div>
								</section>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</Aux>
	);
};

export default abouttheAuthor;
