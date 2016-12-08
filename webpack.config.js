var webpack = require('webpack');

module.exports = {
	
	/* Where it should start processing your code. */
	entry: [
		'script!jquery/dist/jquery.min.js', /* script loader */
		'script!foundation-sites/dist/foundation.min.js', /* script loader */
		'./app/app.jsx',
	],
	externals: {
		jquery: 'jQuery'	
	},
	plugins: [
		new webpack.ProvidePlugin({				
			'$': 'jquery', /* allows us to not specify requring jQuery files in jsx files */
			'jQuery': 'jquery' 
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {			
		root: __dirname, /* variable in node.js that gives path to file you're in */
		alias: { /* Webpack aliases */
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders:  [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map' /* for debugging, shows actual code not webpack code */
};
