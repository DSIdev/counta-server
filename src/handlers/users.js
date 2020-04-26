module.exports = function userHandlers(fastify, opts, next) {
	// Models
	// console.log(fastify.mongoose.User.find)
	// User = fastify.mongoose

	fastify.get("/", {}, async function (req, res) {
		const out = await fastify.mongoose.User.find({}).lean()

		res.send(out)
	})


	next()
}