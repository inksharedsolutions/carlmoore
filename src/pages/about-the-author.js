import React, {Component, Route} from 'react'
import Aux from '../hoc/Auxiliary'
import style from '../styles/pages.module.scss'
import Header from '../components/header'
import Footer from '../components/Footer/Footer'
import authorImage from '../asset/author/main_author.jpg'

const abouttheAuthor = (props) =>{
	return(
		<Aux>
			<div className={style.flexWrapper}>
				<Header currLocation={props.location}/>
					<main className={style.wrapperMain}>
						<div className='container'>
							<div className='row' id={style.flexWrapper}>
								<div className='col l6 m12 s12'>
									<div className={style.authorContainerImage}>
										<img src={authorImage} />
									</div>
								</div>

								<div className='col l6 m12 s12'>
									<section className={style.contentSectionBiography}>
									
										<p className={style.paramsBio}>
											No Content in Author Files and Website Creation and Book website.
										</p>

										<p className={style.paramsBio}>
											{/* <span>Born: December 24, 1958 (age 60 years) Joiner Arkansas</span>

											<span>Children: Robert (June 20, 1978) </span>

											<span>Education: Arkansas Northeastern College (1998-2001)</span> */}
										</p>


										<div className={style.authorContainerName}>
											<h2 className={style.authorName}>Carl Moore</h2>
											<p className="sub-cats-ff-paragraph"><span className={style.spanFx}>Author</span> | <span className={style.spanFx}>Writer</span></p>
										</div>

									</section>
								</div>
							</div>
						</div>
					</main>
				<Footer/>
			</div>
		</Aux>
	);
}		

export default abouttheAuthor;