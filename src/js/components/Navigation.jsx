// Include React
import React from '../../../setup/node_modules/react';
// Include router link
import { NavLink } from '../../../setup/node_modules/react-router-dom';

// Display image
const Navigation = () => (
	<nav>
		<ul>
			<li>
				<NavLink exact to="/" title="Home">
					<i className="fa fa-home fa-fw"></i>
					<span>&nbsp; Home</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/news" title="News">
					<i className="fa fa-newspaper-o fa-fw"></i>
					<span>&nbsp; News</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/graph" title="Graph">
					<i className="fa fa-line-chart fa-fw"></i>
					<span>&nbsp; Graph</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/share" title="Share">
					<i className="fa fa-share-alt fa-fw"></i>
					<span>&nbsp; Share</span>
				</NavLink>
			</li>
		</ul>
	</nav>
);


export default Navigation;
