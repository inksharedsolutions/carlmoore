import React from 'react'
import bannerImg from '../../asset/banner/banner.jpg'
import style from './Banner.module.scss'

const Banner = (props) =>{

	const classWrapper = ['parallax-container',  style.bannerParallax ];
	let strHeader, subParagraph, strJoin  = '';

	if ( (props.headerText.pathname ===  '/') ){
		 strHeader = ('1 Peter 5:7 (ERV)');
		 subParagraph = ('God knew about his worries;');
	}else{
		strHeader = (props.headerText.pathname).replace(/[-/]/g," ").trim();

		let  headingBanr = strHeader.split(' ');

		let newStr = headingBanr.map((e , i )=> {
			if( i !== 1){	
				return e.charAt(0).toUpperCase() + e.slice(1);
			}
			return e;
		})
			console.log( strHeader );	

		strJoin   =  newStr.join(' ');

		strHeader = strHeader === 'privacy policy'
		? (<span>Privacy Policy</span>)
		 : strJoin;
	
	}


	return(

		<div className={classWrapper.join(' ')}>
	     	<div className="parallax">
	     	
	     		<div id={style.bannerCustomContainer}>
		     		<h1 className={style.headingBannerFt}>{strHeader}</h1>
		     		<p className={style.subCatsFt}>{subParagraph}</p>
	     		</div>

	     		<img alt="banner-img" id={style.ParallaxImage} src={bannerImg} />
	     	</div>
	    </div>
	)
}
		
export default Banner;