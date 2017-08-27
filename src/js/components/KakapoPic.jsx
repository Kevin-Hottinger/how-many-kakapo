// Include React
import React from '../../../setup/node_modules/react';

// Display image
const KakapoPic = () => {
	return(
		<figure className="kakapo-pic">
			<img src={require('../../img/kaka_200x200.png')} alt="Photo of Sirocco"/>
			<figcaption>
				Published by
				<a href="https://www.flickr.com/people/40456023@N03">
					Department of Conservation
				</a>
				<small>
					<a rel="license" href="https://creativecommons.org/licenses/by/2.0/">
						Creative Commons 2.0
					</a>
				</small>
			</figcaption>
		</figure>
	);
};

export default KakapoPic;
