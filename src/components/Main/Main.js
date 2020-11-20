import React from "react"
import { Link } from "gatsby"
import Aux from "../../hoc/Auxiliary"
import style from "./Main.module.scss"
import BookImage from '../../asset/Books/main_book.png'
import AuthorImage from '../../asset/author/main_author.jpg'

const Main = () => {

	const col ='col l6 m12 s12';
	const sectionWrapper = [ col , style.authorBio];
	const bookCont = [ col , style.bookContMobile];

	return(
		<Aux>
			<main className={style.mainSection}>
				<div className="container" id={style.mobileContainers}>
					<div className="row">
						<section className={col}>
							<div className={style.boxstylusContainer}>
								<section className={style.sectioncontentColumn}>
								
									<p className={style.tagline}>
										about the book <span className={style.taglineLinear}></span>
									</p>

									<h1 className={style.headingFrontline}>God</h1>
									<span className={style.spanTagLeters}><p><span className={style.spanFlex}>Answered me in Tough Times</span></p></span>

									<p className={style.subcontent}>
										The author used the Holy Bible: Easy-to-Read Version (ERV). Also, this author wanted to show you with eight main points of his story from his personal experiences and/or obstacles. So, this book will tell us that 
									</p>

									<div className={style.buttonLayouts}>
										<Link to="/about-the-book">Read More</Link>
									</div>
								</section>
							</div>
						</section>

						<section className={bookCont.join(' ')}>
							<div className={style.bookimageContainer} id={style.bookImageContOff}>
								<img alt="books" src={BookImage} />
							</div>
						</section>
						
					</div>
				</div>
			</main>

			<main className={style.lowerMain}>
				<div className="container" id={style.mobileContainers}>
				  	<div className='row'>
				  		<section className={col}>
				  			 <div className={style.authorImagecontainer}>
				  			 	<img src={AuthorImage} />
				  			 </div>
				  		</section>		

				  		<section className={sectionWrapper.join(' ')}>

				  			<div className={style.sectioncontentColumn}>
									<p className={style.tagline}>
										about the author<span className={style.taglineLinear}></span>
									</p>
									<h1 className={style.headingFrontline}>
										Carle<span className={style.spanTagLetters}>Moore</span>
									</h1>

									<p className={style.subcontent}>
									Carl was born and raised in Philadelphia, PA to a deceased hearing father and deceased deaf mother.  He is second oldest of seven children (three hearing and four deaf).  Carl and his wife, were married in 1998 and have four grown children.  Although Carl is originally from Philadelphia, PA, he has lived many places.
									</p>

									<div className={style.buttonLayouts}>
										<Link to="/about-the-author">Read Full Bio</Link>
									</div>
								</div>
				  		</section>
				  	</div>
				</div>
			</main>
		</Aux>
	)
}

export default Main;
