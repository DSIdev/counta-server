// Import Controllers
const AuthController = require("../controllers/authController");

// Import Swagger documentation
// const documentation = require("./documentation/carApi");

const routes = [
  {
    method: "POST",
    url: "/api/login",
    handler: AuthController.createToken
  },
  {
    method: "POST",
    url: "/api/authenticate",
    handler: AuthController.authenticate,
    secured: true
  },
  {
    method: ["HEAD", "PUT", "DELETE", "OPTIONS", "PATCH"],
    url: "/api/drivers",
    handler: (req, reply) => {
      reply
        .code(405)
        .header("allow", "GET, POST")
        .send();
    }
  }
];

module.exports = routes;
