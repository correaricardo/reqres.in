// General imports
import React from 'react'
// Styles
import './styles/Pagination.css'

const Pagination = ({total_pages, current_page, changePage}) => {

	const items = []

	for (let i = 1; i <= total_pages; i++) 
	{
		if (i === current_page)
		{
			items.push(
			<li key={i} className="page-item active" onClick={(e) => changePage(e, i)}>
				<a className="page-link">
					{i}<span className="sr-only">(current)</span>
				</a>
			</li>);
		}
		else
		{
			items.push(
			<li key={i} className="page-item" onClick={(e) => changePage(e, i)}>
				<a className="page-link">{i}</a>
			</li>);
		}
  	}

	return (
  		<ul className="pagination justify-content-center">
			{items}
  		</ul>
	)
}

export default Pagination
