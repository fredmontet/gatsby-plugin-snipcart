import React from 'react'

exports.onRenderBody = ({ setPostBodyComponents }, options = {}) => {
	options = Object.assign({
		js: 'https://cdn.snipcart.com/themes/v3.0.0-beta.1/default/snipcart.js',
		styles: 'https://cdn.snipcart.com/themes/v3.0.0-beta.1/default/snipcart.css',
	}, options)

	const components = [
		<script src={options.js}></script>
	]

	if (options.styles){
		components.push(<link rel="stylesheet" href={options.styles}/>)
	}

	return setPostBodyComponents(components)
}