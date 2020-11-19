import React, {Component} from 'react';
import style  from './../Navigation.module.scss';
import {Link} from 'gatsby';


const List = (props) =>{

	var  link  = props.links.map((e,f) => {
		return (<li key={e}><Link to={e.toLowerCase()} activeClassName={style.active} >{e === '/' ? 'Home' : e.replace(/[-]/g," ").trim()}</Link></li>)
	})

	return(
		<div>
			{link}
		</div>
	)
}

export default List;