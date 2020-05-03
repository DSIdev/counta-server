module.exports = function userHandlers(fastify, opts, next) {
	// Models
	// User = fastify.mongoose

	fastify.get("/", {}, async function (req, res) {
		const out = await fastify.mongoose.User.find({}).lean()

		res.send(out)
	})

	fastify.post("/", {}, async function (req, res) {
		userDetails = {
			"fullName": req.body.fullName,
			"email": req.body.email,
			"username": req.body.username,
			"isActive": true
		}
		const newUser = new fastify.mongoose.User(userDetails)
		const out = await newUser.save().catch(err => res.send(err))

		res.send(out)
	})


	next()
}