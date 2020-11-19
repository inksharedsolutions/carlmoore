import React from 'react';
import Aux from '../../hoc/Auxiliary';
import style from './Bottom.module.scss';
import btmImage from '../../asset/banner/bottom_banner.jpg';

import Parser from 'html-react-parser';

const Bottom  =() =>{

	const classWrapper = ['parallax-container',  style.bottomParallax ];

	return(

		<Aux>
			<div className={style.containerBottom} >
				<div className={classWrapper.join(' ')} id={style.fixCustomBottomBanner}>
		     		<div className="parallax">
		     			<div className="container">
		     				<div id={style.markdownsFxContainer}>

		     					<h2>
		     						All flesh will die one day and leave this world we now live in.  But the soul will live on.  
		     						There is a choice individual have to make--who will be your choice, 
		     						the world or the Kingdom of God?
		     					</h2>

		     				</div>
		     			</div>
		     			<img alt="bottom-image" className={style.ParallaxImage} src={btmImage} />
		     		</div>
		    	</div>
			</div>
		</Aux>
		
	)
}

export default Bottom;