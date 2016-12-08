var React = require('react');


/* Stateless functional component. This can be done if the component manages no state and only just renders (i.e. strictly presentational). */
var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a weather application built on React. I have built this for The Complete React Web App Developer Course.</p>
			<p>Here are some of the tools I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - JavaScript framework used for project.
				</li>
				<li>
					<a href="http://openweathermap.org">OpenWeatherMap</a> - API used to pull weather data.
				</li>
			</ul>
		</div>
	);
}

module.exports = About;

