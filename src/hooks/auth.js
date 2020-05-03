// Authentication hook
module.exports = function authHook(routeOptions) {
	// this === fastify
	if (routeOptions.secure) {
		if (!routeOptions.authType) {
			console.error(`${routeOptions.method} ${routeOptions.url}: Secured route missing authScheme`);
			this.close(); // Respond with 503 - Service Unavailable
			return;
		}
		console.log(`${routeOptions.method} ${routeOptions.url}: Adding auth scheme (${routeOptions.authType})`)
		routeOptions.preHandler = function (req, res, done) { console.log("..."); done(); }
	}
}