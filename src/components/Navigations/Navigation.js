import React, { Component } from 'react';
import List from './List/List';
import style from './Navigation.module.scss';
import logo  from '../../asset/logo/main_logo.png';
import {Link} from 'gatsby';


class Navs extends Component {

	 constructor(props) {
	    super(props);
	    this.state = {
	      isExpanded: false
	    };
	}

	handleToggle(e) {
	    e.preventDefault();
	    this.setState({
	      isExpanded: !this.state.isExpanded
	    });
	}

  	render(){

  		const{ isExpanded } = this.state;
		const link = ['/', 'About-the-Author', 'About-The-Book', 'Contact'];

		return (
			<div className={style.Navigation}>
				<div className={style.containerCustomizeFlex} id={style.navcontainerBanner}>
					<div className='row' id={style.rowOffMargin}>
				
						<div className='col l3 m3 s3'>
							<div id={style.imageContainer}>
								<Link to='/'><img alt="logo" src={logo}/></Link>
							</div>
						</div>

						<div className='col l8 m8 s8'>
							<div id={style.nav}>
								<div>
									<div className={style.burgerNav} onClick={(e) => this.handleToggle(e)}>
										<div className={style.burgerLinear}></div>
										<div className={style.burgerLinear}></div>
										<div className={style.burgerLinear}></div>
									</div>
								</div>
								<div className={style.desktopMode}>
									<ul>
										<li>
											<Link to="/" activeClassName={style.active}>Home</Link>
										</li>
										<li>
											<Link to="/about-the-author" activeClassName={style.active}>About the Author</Link>
										</li>
										<li>
											<Link to="/about-the-book" activeClassName={style.active}>About the Book</Link>
										</li>
										<li>
											<Link to="/contact" activeClassName={style.active}>Contact</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>	
					</div>
				</div>
				<div className={`${style.mobileNav} ${isExpanded ? style.expandedNav : ''}`}>
				 	<div className={style.closeNav} onClick={(e)=> this.setState({isExpanded : false})}>X</div>

				 	<div className={style.mobileNavList}>
						<ul>
							<li>
								<Link to="/" activeClassName={style.active}>Home</Link>
							</li>
							<li>
								<Link to="/about-the-author" activeClassName={style.active}>About the Author</Link>
							</li>
							<li>
								<Link to="/about-the-book" activeClassName={style.active}>About the Book</Link>
							</li>
							<li>
								<Link to="/contact" activeClassName={style.active}>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}			
	
export default Navs;