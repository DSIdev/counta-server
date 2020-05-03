module.exports = function authHandlers(fastify, opts, next) {

	fastify.get("/google/callback", {}, async function (req, res) {
		const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req)
		console.log({ token })
		res.redirect("http://localhost:3002/?token=" + token.access_token)
	})

	next()
}