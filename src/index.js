// Import App Options
const conf = require("./config/dev");

// Setup logger
// const log = require("./logger")();

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // logger: log,
  maxParamLength: 50,
  onProtoPoisoning: "remove"
});

// MongoDB connection - Mongoose
fastify.register(
  require("fastify-mongoose-driver").plugin,
  {
    uri: conf.MONGO_URI(),
    settings: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      config: { autoIndex: false },
    },
    models: require("./models")
  }, (err) => {
    if (err) throw err;
  }
)

// Enable CORS for all origins
fastify.register(require("fastify-cors"), {
  origin: "*"
});

// Import Routes
fastify.register(require("./routes"), { prefix: "/api" })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(conf.PORT, "0.0.0.0");
    // log.info(`server listening on ${fastify.server.address().port}`);
    console.log(`Listening for incoming requests.`);
  } catch (err) {
    console.log(err);
    // log.error(err);
    process.exit(1);
  }
};
start();
