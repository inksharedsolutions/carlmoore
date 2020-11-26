import React, { Route } from 'react';
import Aux from '../hoc/Auxiliary';
import style from '../styles/pages.module.scss';
import Header from '../components/header';
import BookLinks from '../components/Links/links';
import Footer from '../components/Footer/Footer';
import mainBook from '../asset/Books/main_book.png';
import { DiscussionEmbed } from 'disqus-react';

class aboutTheBook extends React.Component {
	render() {
		const row = [ 'row', style.rowMarginBottom ];
		const slug = this.props.location.href;

		const disqusConfig = {
			shortname: 'carl-moore',
			config: { identifier: 12, slug }
		};

		return (
			<Aux>
				<div className={style.flexWrapper}>
					<Header currLocation={this.props.location} />
					<main className={style.wrapperMain}>
						<div className="container">
							<div className={row.join(' ')}>
								<div className="col l6 m12 s12">
									<div className={style.bookImgContainer}>
										<img src={mainBook} />
									</div>
								</div>

								<div className="col l6 m12 s12">
									<section className={style.contentBook}>
										<h2 className={style.headingBookIntro}>God answered me in Tough Times</h2>
										<p className={style.subCatsParagph}>
											My First Deaf Missionary Trip to Kenya, Africa In 2006
										</p>
										<p>
											The author used the Holy Bible: Easy-to-Read Version (ERV). Also, this
											author wanted to show you with eight main points of his story from his
											personal experiences and/or obstacles. So, this book will tell us that{' '}
										</p>
										<p>1. according to 1 Peter 5:7 (ERV), God knew about his worries; </p>
										<p>2. according to Psalm 23:1–6 (ERV), God knew about his troubles; </p>
										<p>3. according to Psalm 34:5–6; Psalm 34:18–19, Psalm 27:7–10, </p>
										<p>Psalm 18:5–6 (ERV), God listened his call for help; </p>
										<p>4. according to Philippians 4:7 (ERV), God gave him a peace of mind; </p>
										<p>5. according to Psalm 9:9–10, Psalm 46:1–3 (ERV), God protected us; </p>
										<p>6. Aaccording to Psalm 23:1–6 (ERV), God watched over us;</p>
										<p>7. according to Psalm 46:1–5 (ERV), God was with us; and</p>
										<p>8. according Romans 8:31–39 (ERV), God is with us.</p>
									</section>

									<BookLinks />
								</div>
							</div>

							<div className={style.commentSection}>
								<DiscussionEmbed {...disqusConfig} />
							</div>
						</div>
					</main>
					<Footer />
				</div>
			</Aux>
		);
	}
}

export default aboutTheBook;
