module.exports = function userHandlers(fastify, opts, next) {
	// Models
	// console.log(fastify.mongoose.User.find)
	// User = fastify.mongoose

	fastify.get("/google", {}, async function (req, res) {
		console.log(fastify.googleOAuth2)
		fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req,
			(err, result) => err ? res.send(err) : res.send("okay"))
	})

	next()
}