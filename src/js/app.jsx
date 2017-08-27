// Include React
import React from '../../setup/node_modules/react';
import ReactDOM from '../../setup/node_modules/react-dom';
// Add support for proptypes
import PropTypes from '../../setup/node_modules/prop-types';

// Display Header
function KakapoHeader(props) {
	return(
		<header>
            <h1>How many k&#257;k&#257;p&#333; are there?</h1>
        </header>
	);
}

// Display image
function KakapoPic(props) {
	return(
		<figure className="kakapo-pic">
			<img src={require('../img/kaka_200x200.png')} alt="Photo of Sirocco"/>
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
}

// Display population change information
function KakapoCount(props) {
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
}

// Ensure object is passed to function
KakapoCount.propTypes = {
	initialPopData: PropTypes.object.isRequired
};

// Our application
class Application extends React.Component {

	// Initialise state
	state = { initialPopData: this.props.initialPopData }

	// Set default prop values
	static defaultProps = {
		initialPopData: {
			current_pop: 0,
			annual_change: 0,
			last_update: '../../..'
		},
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
		var that = this;
		var url = require('../json/population_overview.json');

		fetch(url).then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
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

};

ReactDOM.render(<Application/>, document.getElementById('content'));
