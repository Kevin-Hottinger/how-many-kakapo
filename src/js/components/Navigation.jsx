// Include React
import React from '../../../setup/node_modules/react';

// Display image
const Navigation = () => {
	return(
		<nav>
			<ul>
				<li>
					<a href="" title="Home">
						<i className="fa fa-home fa-fw"></i>
						<span>&nbsp; Home</span>
					</a>
				</li>
				<li>
					<a href="" title="News">
						<i className="fa fa-newspaper-o fa-fw"></i>
						<span>&nbsp; News</span>
					</a>
				</li>
				<li>
					<a href="" title="Graph">
						<i className="fa fa-line-chart fa-fw"></i>
						<span>&nbsp; Graph</span>
					</a>
				</li>
				<li>
					<a href="" title="Share">
						<i className="fa fa-share-alt fa-fw"></i>
						<span>&nbsp; Share</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
