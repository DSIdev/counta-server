// Services
const Auth = require("../services/Auth");

exports.createToken = async (req, reply) => {
  console.log("fastify", typeof fastify, typeof fastify.mongoose)
  const { username, userpwd } = req.body;
  const token = await Auth.issueToken({ username, userpwd });
  reply.send(token);
};

exports.authenticate = async (req, reply) => {
  reply.send(await Auth.verifyToken(req));
};
