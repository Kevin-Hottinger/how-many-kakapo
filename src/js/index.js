// Include scss
import '../css/style.scss';

// Include google analytics
import './ga.js';

// Include React
import React from '../../setup/node_modules/react';
import { render } from '../../setup/node_modules/react-dom';

// Include Page component
import Page from './containers/page.jsx';

render(
	<Page/>,
	document.getElementsByTagName('main')[0]
);
