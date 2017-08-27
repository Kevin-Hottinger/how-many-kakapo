// Include React
import React from '../../../setup/node_modules/react';
// Add support for proptypes
import PropTypes from '../../../setup/node_modules/prop-types';

// Import KakapoCount component
import KakapoCount from '../components/KakapoCount.jsx';
// Import KakapoHeader component
import KakapoHeader from '../components/KakapoHeader.jsx';
// Import KakapoPic component
import KakapoPic from '../components/KakapoPic.jsx';

// Our application
export default class Page extends React.Component {

	// Initialise state
	state = {
		initialPopData: this.props.initialPopData
	}

	// Set default prop values
	static defaultProps = {
		initialPopData: {
			current_pop: 0,
			annual_change: 0,
			last_update: '../../..'
		}
	}

	// Check prop types
	static propTypes = {
		initialPopData: PropTypes.shape({
			current_pop: PropTypes.number.isRequired,
			annual_change: PropTypes.number.isRequired,
			last_update: PropTypes.string.isRequired
		}).isRequired
	}

	// On Mount collect population data from JSON
	componentDidMount() {
		const that = this;
		const url = require('../../json/population_overview.json');

		fetch(url).then(function(response) {
			if (response.status >= 400) {
				throw new Error('Bad response from server');
			}
			return response.json();
		}).then(function(data) {
			that.setState({ initialPopData: data.overview[0]});
		});
	}

	// Render content
	render() {
		return(
			<div className="application">
				<KakapoHeader />
				<div className="result">
					<KakapoPic />
					<KakapoCount initialPopData={this.state.initialPopData}/>
				</div>
			</div>
		);
	}

}
