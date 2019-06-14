# gatsby-plugin-snipcart

A plugin for using [Snipcart](https://snipcart.com/) v3 beta with [Gatsby](https://www.gatsbyjs.org/).

## Usage

In your `gatsby-config.js` file, add:

```javascript
module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: 'YOUR_SNIPCART_KEY'
			}
		}
	]
}
```

## Options

`apiKey` (required): Your Snipcart API key. If not set, it will try to find it in `process.env.SNIPCART_API_KEY`.

`js`: A Snipcart JavaScript file.

`styles`: A stylesheet file to link to. Set to `false` for none.

`defaultLocation` (default: True): Add the Snipcart markup after the body. If you want to change its location, set this
variable to false and add the markup yourself but don't forget to add the API key yourself.