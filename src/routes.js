//Fastify plugin for registering route handlers
module.exports = function routes(fastify, opts, next) {

	fastify.register(require('./handlers/users'), { prefix: '/users' })
	fastify.register(require('./handlers/auth'), { prefix: '/auth' })

	next()
}