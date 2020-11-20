import React from 'react'
import style from '../../styles/pages.module.scss';


const Links = () =>{
	return(
		<>
			<nav className={style.booklinkBlocks}>
			    <span>Ebooks :</span>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/God-Answered-Tough-Times-Missionary-ebook/dp/B087QTFYS1/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1588796054&sr=8-1">Amazon</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/god-answered-me-in-tough-times-carl-moore/1128795030?ean=9781648950117">Barnes & Noble</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/god-answered-me-in-tough-times-my-first-deaf-missionary-trip-to-kenya-africa-in-2006/">Stratton Press</a></li>
			</nav>

			<nav className={style.booklinkBlocks}>
				<span>Purchase Paperback :</span>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/God-Answered-Tough-Times-Missionary/dp/1643457284/ref=sr_1_1?dchild=1&keywords=9781643457284&qid=1588796054&sr=8-1">Amazon</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/god-answered-me-in-tough-times-carl-moore/1128795030?ean=9781643457284">Barnes & Noble</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/God-Answered-Tough-Times/Carl-Moore/9781643457284?id=8049069540563&_ga=2.136780400.1998066025.1605877581-2145380449.1604906972">Books A Million</a></li>
			</nav>	
		</>	
	)
}

export default Links;