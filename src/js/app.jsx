import React from '../../setup/node_modules/react';
import ReactDOM from '../../setup/node_modules/react-dom';

function Kakapo_header(props) {
	return(
		<header>
            <h1>How many k&#257;k&#257;p&#333; are there?</h1>
        </header>
	);
}

function Kakapo_pic(props) {
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

function Kakapo_count(props) {
	return(
		<div className="count">
			<h2>
				Current population: <span className="bold">153</span>
			</h2>
			<h3>
				Annual change: <span className="bold">-1</span>
			</h3>
			<h3>
				Last change: <span className="bold">25/07/17</span>
			</h3>
		</div>
	);
}

function Application(props) {
	return(
		<div className="application">
			<Kakapo_header />
			<div className="result">
				<Kakapo_pic />
				<Kakapo_count />
			</div>
		</div>
	);
}

ReactDOM.render(<Application/>, document.getElementById('content'));
