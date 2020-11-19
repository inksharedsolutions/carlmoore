import React, {Component, Route} from 'react'
import {graphql , useStaticQuery } from 'gatsby'
import Parser from 'html-react-parser'
import Aux from '../hoc/Auxiliary'
import style from '../styles/pages.module.scss'
import Header from '../components/header'
import Footer from '../components/Footer/Footer'
import authorImage from '../asset/author/dummy.png'

const TermsAndConditions = (props) =>{

	const data = useStaticQuery(graphql`
		query{
			allMarkdownRemark{
			    edges{
			    	node{
			  			frontmatter{
			          title
			          date
			        }
				      html
				      excerpt
			        }
			    }
			}
		}
	`)

	//fetching privacy policy
	const markDownPp = (data.allMarkdownRemark.edges[2]);


	console.log(data.allMarkdownRemark.edges);	

	return(
		<Aux>
			<div className={style.flexWrapper}>	
				<Header currLocation={props.location}/>
					<main className={`${style.wrapperMain} ${style.notifPages}`}>
						<div className='container'>

							<div className={style.parseContent}>
								{Parser(markDownPp.node.html)}
							</div>

						</div>
					</main>
				<Footer/>
			</div>
		</Aux>
	);
}

export default TermsAndConditions;