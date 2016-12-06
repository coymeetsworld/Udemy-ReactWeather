var React = require('react');


// var WeatherMessage = React.createClass({
// 	render: function () {
// 		var {temp,location} = this.props;
// 		return (
// 			<div>
// 				<p>It is {temp}F in {location}</p>
// 			</div>
// 		)
// 	}
// });

// Arrow function
// var WeatherMessage = (props) => {
// 	var {temp,location} = props;
		
// 	return (
// 		<h3>It is {temp}F in {location}</h3>
// 	)	
// }


//Can use ES6 destructuring inside parameters
var WeatherMessage = ({temp, location}) => {
		
	return (
		<h3 className="text-center">It is {temp}F in {location}</h3>
	)	
}
module.exports = WeatherMessage;