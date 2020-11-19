import React from 'react';
import Banner from './Banner/Banner';
import Navigations from './Navigations/Navigation';	
import Aux from '../hoc/Auxiliary';


const header = (props) => {
	return (
		<Aux>
			<Navigations pathLocation={props.currLocation} />
			<Banner headerText={props.currLocation} />
		</Aux>
	);
}

export default header;