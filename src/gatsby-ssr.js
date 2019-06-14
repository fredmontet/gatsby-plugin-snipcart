import React from 'react'

let warning = false

exports.onRenderBody = ({ setPostBodyComponents }, options = {}) => {
	options = Object.assign({
		apiKey: process.env.SNIPCART_API_KEY,
		defaultLocation: true,
		js: 'https://cdn.snipcart.com/themes/v3.0.0-beta.1/default/snipcart.js',
		styles: 'https://cdn.snipcart.com/themes/v3.0.0-beta.1/default/snipcart.css',
	}, options)

	if(!options.apiKey){
		if (!warning) {
			warning = true
			console.log('No Snipcart API key found')
		}
		return

		const components = [
		<script src={options.js}></script>
	]

	if (options.styles){
		components.push(<link rel="stylesheet" href={options.styles}/>)
	}

	if (option.defaultLocation){
		components.push(<div hidden id="snipcart" data-api-key={options.apiKey}></div>)
	}

	return setPostBodyComponents(components)
}