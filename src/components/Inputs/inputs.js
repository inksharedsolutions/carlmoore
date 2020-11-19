import React from 'react'
import style from '../../styles/pages.module.scss'

 

const Inputs = (props)=> {

 	const initName =  props.name;
 	const toCapitalize = initName.charAt(0).toUpperCase() + initName.slice(1);


	return (
		<label> 
			{toCapitalize} 
			<span className="asterisk">*</span> 

			<input 
				name={initName.toLowerCase()} 
				type={props.type}
				className={style.formInputs}
				placeholder={toCapitalize} 
				required 
			/>
		</label>
	)
}


export default Inputs;