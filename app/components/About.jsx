var React = require('react');


/* Stateless functional component. This can be done if the component manages no state and only just renders (i.e. strictly presentational). */
var About = (props) => {
	return (
		<div>
			<h3>About</h3>
			<p>Welcome to the About page!</p>
		</div>
	);
}

module.exports = About;

