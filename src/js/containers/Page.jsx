// Include React
import React from '../../../setup/node_modules/react';
// Add support for proptypes
import PropTypes from '../../../setup/node_modules/prop-types';
// Add support for react router
import {
	BrowserRouter,
	Route,
	Switch
} from '../../../setup/node_modules/react-router-dom';

// Import Navigation component
import Navigation from '../components/Navigation.jsx';
// Import Page Home component
import HomePage from '../components/HomePage.jsx';
// Import Page News component
import NewsPage from '../components/NewsPage.jsx';
// Import Page Graph component
import GraphPage from '../components/GraphPage.jsx';
// Import Page Share component
import SharePage from '../components/SharePage.jsx';
// Import Page NotFound component
import NotFound from '../components/NotFound.jsx';

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
			<BrowserRouter>
				<div id="content">
					<Switch>
						<Route exact path="/" render= {
							() => <HomePage initialPopData={this.state.initialPopData}/>
						} />
						<Route path="/news" component={NewsPage} />
						<Route path="/graph" component={GraphPage} />
						<Route path="/share" component={SharePage} />
						<Route component={NotFound} />
					</Switch>
					<Navigation />
				</div>
			</BrowserRouter>
		);
	}

}
