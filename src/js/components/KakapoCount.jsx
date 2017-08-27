// Include React
import React from '../../../setup/node_modules/react';
// Add support for proptypes
import PropTypes from '../../../setup/node_modules/prop-types';

// Display population change information
const KakapoCount = props => {
	return(
		<div className="count">
			<h2>
				Current population: <span className="bold">{props.initialPopData.current_pop}</span>
			</h2>
			<h3>
				Annual change: <span className="bold">{props.initialPopData.annual_change}</span>
			</h3>
			<h3>
				Last change: <span className="bold">{props.initialPopData.last_update}</span>
			</h3>
		</div>
	);
};

// Ensure object is passed to function
KakapoCount.propTypes = {
	initialPopData: PropTypes.object.isRequired
};

export default KakapoCount;
