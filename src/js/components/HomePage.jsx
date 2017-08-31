// Include React
import React from '../../../setup/node_modules/react';
// Import KakapoHeader component
import Header from '../components/Header.jsx';
// Import KakapoPic component
import KakapoPic from '../components/KakapoPic.jsx';
// Import KakapoCount component
import KakapoCount from '../components/KakapoCount.jsx';

// Display HomePage
const HomePage = props => (
	<div className="application">
		<Header title="How many k&#257;k&#257;p&#333; are there?"/>
		<div className="result">
			<KakapoPic />
			<KakapoCount initialPopData={props.initialPopData}/>
		</div>
	</div>
);

export default HomePage;
